const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const List = require("../models/List");

// @route    POST  api/lists
// @desc     Create a new list
// @access   Public
router.post(
  "/",
  auth,
  async (req, res) => {
    console.log('Did we get here?')
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   console.log(`We got some errors here: ${errors.array()}`)
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const { name, description } = req.body;
    console.table(req.body)
    try {
      const newList = new List({
        name,
        description,
        user: req.user.id, //Get from auth middleware
      });
      console.table(newList);
      const list = await newList.save();
      res.json(list);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    Get  api/lists
// @desc     Get private lists
// @access   Public
router.get("/", auth, async (req, res) => {
  try {
    const lists = await List.find({ user: req.user.id }).sort({ date: -1 });
    res.json(lists);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route    PUT  api/lists/:id
// @desc     Edit a list
// @access   Private
router.put("/:id", auth, async (req, res) => {
  const { name, description } = req.body;

  //Build list object
  const listFields = {};
  if (name) listFields.name = name;
  if (description) listFields.description = description;
  console.log(listFields)
  try {
    let list = await List.findById(req.params.id);

    if (!list) return res.status(400).json({ msg: "List not found" });
    // Make sure user owns list
    if (list.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    list = await List.findByIdAndUpdate(
      req.params.id,
      { $set: listFields },
      { new: true }
    );
 
    res.json(list);
  } catch (err) {}
  console.error(err.message);
  res.status(500).send("Server Error");
});

// @route    DELETE  api/lists/:id
// @desc     Delete a list
// @access   Private
router.delete("/:id", auth, async (req, res) => {
    try {
        let list = await List.findById(req.params.id);
    
        if (!list) return res.status(400).json({ msg: "List not found" });
        // Make sure user owns list
        if (list.user.toString() != req.user.id) {
          return res.status(401).json({ msg: "Not authorized" });
        }
      await List.findByIdAndRemove(req.params.id);
    
        res.json({msg:'Contact removed',_id:req.params.id});
      } catch (err) {
          console.error(err.message);
          res.status(500).send("Server Error");

      }
    });

module.exports = router;
