const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Truck_Promotion = connection.define('truck_promotion', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    promotion_id: Sequelize.INTEGER,
    truck_id: Sequelize.INTEGER,
});

module.exports = Truck_Promotion;
