const express = require('express');

const router = express.Router();

// @route    POST  api/lists
// @desc     Create a new list
// @access   Public
router.post('/', (req,res) =>{
    res.send('Create list');
});

// @route    Get  api/lists
// @desc     Get lists
// @access   Public
router.get('/', (req,res) =>{
    res.send('Get lists');
});

// @route    PUT  api/lists/:id
// @desc     Edit a list
// @access   Private
router.put('/:id', (req,res) =>{
    res.send('Edit lists');
});

// @route    DELETE  api/lists/:id
// @desc     Delete a list
// @access   Private
router.delete('/:id', (req,res) =>{
    res.send('Delete List');
});

module.exports = router;