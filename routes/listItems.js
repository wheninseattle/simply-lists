const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// const User = require("../models/User");
const List = require("../models/List");


// @route    POST  api/listItems
// @desc     Create a new list item
// @access   Public
router.post(
  "/",
  auth,
  async (req, res) => {
    const { name,description,listId } = req.body;
    try {
      const list = await List.findById(listId);
      const listItems = list.listItems;
      listItems.push({
        name: name,
        description: description,
        user: req.userlid,
        list: listId
      })
      const updated = await list.save();
      const newItem = updated.listItems[(updated.listItems.length-1)]
      res.json(newItem);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    Get  api/listsItems
// @desc     Get private lists
// @access   Public
router.get("/:id", auth, async (req, res) => {
  try {
    const list = await List.findById(req.params.id);
    const listItems = list.listItems;
    res.json(listItems);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// @route    PUT  api/lists/:id
// @desc     Edit a list
// @access   Private
router.put("/:listId/:itemId", auth, async (req, res) => {
  const { name, description } = req.body;
  try {
    let list = await List.findById(req.params.listId);
    if (!list) return res.status(400).json({ msg: "List not found" });
    // Make sure user owns list
    if (list.user.toString() != req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    let listItem = list.listItems.id(req.params.itemId);
    if(name) listItem.name = name;
    if(description) listItem.description = description;
    let update = list.save();
    res.json(update)
  } catch (err) {}
  console.error(err.message);
  res.status(500).send("Server Error");
});

// @route    DELETE  api/lists/:id
// @desc     Delete a list
// @access   Private
router.delete("/:listId/:itemId", auth, async (req, res) => {
    try {
        let list = await List.findByIdAndUpdate(req.params.listId,{
          $pull: {listItems: {_id: req.params.itemId}}
        },{
          new: true,
          runValidators: true
        });
    
        if (!list) return res.status(400).json({ msg: "List not found" });
        // Make sure user owns list
        if (list.user.toString() != req.user.id) {
          return res.status(401).json({ msg: "Not authorized" });
        }
        res.json({msg:'List Item Removed',id:req.params.itemId});
      } catch (err) {
          console.error(err.message);
          res.status(500).send("Server Error");

      }
    });

module.exports = router;
