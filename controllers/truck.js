const express = require('express');
const { validationResult } = require('express-validator/check');
const router = express.Router();
const Truck = require('../models/Truck');

// Get All Trucks
router.get('/', (req, res, next) => {
    Truck.findAll()
        .then(trucks => {
             console.log(trucks);
            res.render('api/trucks', {
                trucks: trucks,
                pageTitle: 'All Food Trucks',
                path: '/trucks'
            })
        })
        .catch ((err) => {
            res.status(500).json({message: 'Something went wrong.'})
        })

});

// Add New Truck
router.post('/', (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        console.log(errors);
        return res.status(422).render('/', {
            errorMessage: errors.array()[0].msg,
            validationErrors: errors.array()
        })
    }
    const truck = new Truck({
        truck_name: req.body.truck_name,
        truck_departure_time: req.body.truck_departure_time,
        truck_rating: req.body.truck_rating,
        truck_price_range: req.body.truck_price_range,
        truck_cuisine_type: req.body.truck_cuisine_type,
        truck_description: req.body.truck_description
    });
    truck
        .save()
        .then(res => {
        // console.log(result);
        console.log('Added New Truck');
        res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
});

// Update Truck With Id
router.patch('/:id', async (req, res) => {
    const truckId = req.params.id;

    const truck_name = req.body.truck_name;
    const truck_departure_time = req.body.truck_departure_time;
    const truck_rating = req.body.truck_rating;
    const truck_price_range = req.body.truck_price_range;
    const truck_cuisine_type = req.body.truck_cuisine_type;
    const truck_description = req.body.truck_description;

    Truck.findById(truckId)
    .then(truck => {
      if (truck.truckId.toString() !== req.truck.id.toString()) {
        return res.redirect('/');
      }
      Truck.truck_name = truck_name;
      Truck.truck_departure_time = truck_departure_time;
      Truck.truck_rating = truck_rating;
      Truck.truck_price_range = truck_price_range;
      Truck.truck_cuisine_type = truck_cuisine_type;
      Truck.truck_description = truck_description;

      return truck
        .save()
        .then(res => {
        console.log('Updated Truck!');
        res.redirect('/truck');
      });
    })
    .catch(err => console.log(err));
});

// Rate Specific Truck
router.patch('/:id', async (req, res) => {
    const truckId = req.params.id;

    await Truck.findById(truckId)
        .then(truck => {
            if (truckId) {
                Truck.truck_rating = req.body.truck_rating;
                return truck;
            }
            next();
        })
      .then((res) => {
        console.log('Found Truck!');
        res.redirect('/');
      })
      .catch(err => console.log(err));
});

// Delete Specific Truck
router.delete('/:id', async (req, res) => {
    const truckId = req.params.id;

    await Truck.deleteOne({ id: truckId})
      .then(() => {
        console.log('Truck Deleted!');
        res.redirect('/');
      })
      .catch(err => console.log(err));
});

module.exports = router;
