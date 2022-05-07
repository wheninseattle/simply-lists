const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Import user model
const User = require("../models/User");

// @route    GET  api/auth
// @desc     Get Logged in User
// @access   Private
router.get('/',auth, async(req,res) =>{
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error')

    }
});


// @route    POST  api/auth
// @desc     Authorize user and get token
// @access   Public
router.post('/', [
    check('email','Please use valid email.').isEmail(),
    check('password','Password required').exists()
],
async (req,res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array()})
    }
    const { email,password } = req.body;

    try {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({ msg: 'No user is registered with that email address'})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ msg: 'Password is incorrect'})
        }

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
        console.error(err);
        res.status(500).send('Server Error')
    }

});

module.exports = router;