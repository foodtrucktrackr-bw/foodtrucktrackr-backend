// Dependencies
const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator/check');

const User = require('../models/user');
const authController = require('../controllers/auth');

const errorMsg = 'Incorrect login. Please try again.'

router.post(
  '/login',
  [
    body('email')
      .isEmail()
      .withMessage(errorMsg)
      .normalizeEmail(),
    body('password', errorMsg)
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  authController.login
);

router.post(
  '/register',
  [
    check('email')
      .isEmail()
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(
              'E-Mail exists already, please pick a different one.'
            );
          }
        });
      })
      .normalizeEmail(),
    body(
      'password',
      'Please enter a password with only numbers and text and at least 5 characters.'
    )
      .isLength({ min: 5 })
      .isAlphanumeric()
      .trim()
  ],
  authController.register
);

router.post('/logout', authController.logout);

module.exports = router;


