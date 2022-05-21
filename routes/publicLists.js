const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
// const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const List = require("../models/List");


// @route    Get  api/lists/all
// @desc     Get all public lists
// @access   Public
router.get("/all", async (req, res) => {
  try {
    const lists = await List.find({ visibility: 'public' }).sort({ date: -1 });
    res.json(lists);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
