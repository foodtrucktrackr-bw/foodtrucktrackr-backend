const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const SECRET = process.env.PORT || 5000;
const errMsg = 'Wrong Credentials! Try again later.';

exports.register = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  const firstname = req.body.first_name;
  const lastname = req.body.last_name;
  const role = req.body.role;
  const radius_size = req.body.radius_size;

  bcrypt
    .hash(password, 11)
    .then(hashed => {
      const user = new User({
        email: email,
        password: hashed,
        username: username,
        first_name: firstname,
        last_name: lastname,
        role: role,
        radius_size: radius_size
      });
      return user.save();
    })
    .then(result => {
      res.status(201).json({ message: 'User created!', userId: result.id });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.login = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let loadedUser;

  User.findOne({ username: username })
    .then(user => {
      if (!user) {
        const error = new Error(errMsg);
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then(isEqual => {
      if (!isEqual) {
        const error = new Error(errMsg);
        error.statusCode = 401;
        throw error;
      }
      const token = jwt.sign(
        {
          username: loadedUser.username,
          userId: loadedUser.id.toString()
        },
        SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token, userId: loadedUser.id.toString() });
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Logout User
exports.logout = (req, res, next) => {
    const user = User.req.id;
    if(!user) {
        console.log('No User Found!')
    }
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
      });
};
