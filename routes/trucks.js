// Dependencies
const express = require('express');
const router = express.Router();


// GET All Users
router.get('/', async (req, res, next) => {
  try {
    const tasks = await helpers.find()
        res.status(200).json(tasks)
      } catch (err) {
       next(err)
    }
});

// INSERT New User
router.post("/", (req, res) => {
  if (!req.body.description) {
    return res.status(400).json({message: 'Error, description is required.'})
  }
    helpers.add(req.body)
      .then((task) => {
        res.status(201).json(task)
      })
      .catch((err) => {
        res.status(500).json({message: 'Something went wrong', err})
      })
})

module.exports = router;
