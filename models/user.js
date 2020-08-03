const Sequelize = require('sequelize');
const connection = require('../data/connection');
const bcrypt = require('bcryptjs');

const User = connection.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
    radius_size: Sequelize.INTEGER
    });

module.exports = User;
