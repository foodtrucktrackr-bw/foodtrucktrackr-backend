// Dependencies
const express = require('express');
const isAuthed = require('../util/isAuthed');
const Menu = require('../controllers/menu');

const router = express.Router();


router.get('/truck/:id', isAuthed, Menu);

router.post('/truck/:id', isAuthed, Menu);

router.patch('/truck/:id',isAuthed,  Menu);

router.post('/truck/:id/item/:id', isAuthed, Menu);

router.patch('/truck/:id/item/:id', isAuthed, Menu);

router.delete('/truck/:id/item/:id', isAuthed, Menu);


module.exports = router;
