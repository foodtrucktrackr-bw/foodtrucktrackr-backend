const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Truck = connection.define('truck', {
    truck_name: Sequelize.STRING,
    truck_departure_time: Sequelize.INTEGER,
    truck_rating: Sequelize.INTEGER,
    truck_price_range: Sequelize.INTEGER,
    truck_cuisine_type: Sequelize.STRING,
    truck_description: Sequelize.STRING
});

module.exports = Truck;
