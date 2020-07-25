// Dependencies
const express = require('express');
// const helpers = require('../data/helpers/tasksModel');
const router = express.Router();


// // GET All tasks
// router.get('/', async (req, res, next) => {
//   try {
//     const tasks = await helpers.find()
//         res.status(200).json(tasks)
//       } catch (err) {
//        next(err)
//     }
// });

// // INSERT New task
// router.post("/", (req, res) => {
//   if (!req.body.description) {
//     return res.status(400).json({message: 'Error, description is required.'})
//   }
//     helpers.add(req.body)
//       .then((task) => {
//         res.status(201).json(task)
//       })
//       .catch((err) => {
//         res.status(500).json({message: 'Something went wrong', err})
//       })
// })

module.exports = router;
