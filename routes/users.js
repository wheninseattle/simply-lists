const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

// Import user model
const User = require("../models/User");

// @route    POST  api/users
// @desc     Register a user
// @access   Public
router.post(
  "/",
  [
    // Use Express Validator to validate input
    check("name", "Please add name").not().isEmpty(),
    check("username", "Please provide a username.").not().isEmpty(),
    check("email", "Please include a valid email address").isEmail(),
    check(
      "password",
      "Please use a password with 6 or more characters."
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    console.log('here')
    // Check for errors from validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, username, email, password } = req.body;
    try {
      // @todo - can we check for existing username / email at same time.
      // findOne only returns one entry, and we want to provide specifici info to user
      let user = await User.findOne({ email }); // Make sure to include async - email: email
      // Check for existing exmail address
      if (user) {
        return res
          .status(400)
          .json({
            msg: "An account is already registered to that email address",
          });
      }
      let userName = await User.findOne({ username });
      if (userName) {
        return res
          .status(400)
          .json({
            msg: "That username is in use, please choose a different one",
          });
      }
      // If not existing user, create new user with mongoose model
      user = new User({
        name,
        username,
        email,
        password,
      });
      console.table(user);
      // Encrypt Password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      console.log(user);
      await user.save();

      // Create payload
      const payload = {
        user: {
          id: user.id,
        },
      };
      // Sign jwt webtoken
      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
