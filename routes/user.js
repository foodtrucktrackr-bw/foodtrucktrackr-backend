// Dependencies
const express = require('express');
const authed = require('../util/isAuthed');
const User = require('../controllers/user');
const router = express.Router();

// Get Single User
router.get('/:id', authed, (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            console.log(user);
            return user;
        })
        .catch ((err) => {
            res.status(500).json({message: 'Something went wrong.'})
        })

});

module.exports = router;
