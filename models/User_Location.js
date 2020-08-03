const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const User_Location = connection.define('user_location', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    truck_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    location_id: Sequelize.INTEGER

});

module.exports = User_Location;
