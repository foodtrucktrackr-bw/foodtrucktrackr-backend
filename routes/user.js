// Dependencies
const express = require('express');
const isAuthed = require('../util/isAuthed');
const User = require('../controllers/user');

const router = express.Router();

router.get('/', isAuthed, User);

router.get('/:id', isAuthed, User);

module.exports = router;
