// Dependencies
const express = require('express');
const isAuthed = require('../util/isAuthed');
const Truck = require('../controllers/truck');

const router = express.Router();


router.get('/', isAuthed, Truck);

router.get('/:id', isAuthed, Truck);

router.post('/:id', isAuthed, Truck);

router.patch('/:id',isAuthed,  Truck);

router.delete('/:id', isAuthed, Truck);

router.post('/:id/rate', isAuthed, Truck);

router.post('/:id/favorite', isAuthed, Truck);

router.delete('/:id/favorite:id', isAuthed, Truck);


module.exports = router;
