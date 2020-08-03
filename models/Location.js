const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Location = connection.define('location', {
    location_latitude: Sequelize.GEOGRAPHY,
    location_longitude: Sequelize.GEOGRAPHY,
    location_address: Sequelize.STRING,
    location_city: Sequelize.STRING,
    location_state: Sequelize.STRING,
    location_zip_code: Sequelize.INTEGER
});

module.exports = Location;
