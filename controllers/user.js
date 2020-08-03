const User = require('../models/User');
const express = require('express');
const router = express.Router();

// Get All Users
router.get('/', (req, res, next) => {
    console.log('Success!');
});

module.exports = router;
