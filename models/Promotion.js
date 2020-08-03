const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Promotion = connection.define('promotion', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    promotion_name: Sequelize.STRING,
    promotion_description: Sequelize.STRING,
    promotion_price: Sequelize.INTEGER
});

module.exports = Promotion;
