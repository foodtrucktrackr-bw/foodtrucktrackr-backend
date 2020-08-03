// Dependencies
const express = require('express');
const router = express.Router();
const db = require('../data/connection');
const User = require('../models/User');

// Globals
const successMsg = "Success!";
const errorMsg = "Uh-oh. Something went wrong";

// Routes
router.get('/', (req, res, next) => {
    User.findAll()
        .then(users => {
            console.log(users);
            res.sendStatus(200);
        })
        .catch(err => {
            res.sendStatus(400).json({message: errorMsg, body: err})
        });
    });
router.get('/:id', (req, res, next) => res.send(200).json({message: successMsg}));

module.exports = router;
