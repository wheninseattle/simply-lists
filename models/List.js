const mongoose = require("mongoose");
const ListItemSchema = require("../models/ListItem");

const ListSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  visibility: {
    type: String,
    enum: ["private", "public"],
    default: "private",
  },
  tags: {
      type: Array,
      required: false
  },
  commentsEnabled: {
    type: Boolean,
    default: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  listItems: [ListItemSchema],
});

module.exports = mongoose.model("list", ListSchema);
