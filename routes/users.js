const express = require('express');
const router = express.Router();

// Import user model
const User = require('../models/User')

// @route    POST  api/users
// @desc     Register a user
// @access   Public
router.post('/', (req,res) =>{
    res.send('Register a user');
});

module.exports = router;