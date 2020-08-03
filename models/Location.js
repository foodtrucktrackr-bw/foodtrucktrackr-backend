const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Location = connection.define('location', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    location_address: Sequelize.STRING,
    location_city: Sequelize.STRING,
    location_state: Sequelize.STRING,
    location_zip_code: Sequelize.INTEGER
});

module.exports = Location;
