const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Menu = connection.define('menu', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    menu_truck: Sequelize.INTEGER,
    menu_promotion: Sequelize.INTEGER,
    menu_item_name: Sequelize.STRING,
    menu_item_description: Sequelize.STRING,
    menu_item_price: Sequelize.INTEGER
    })

module.exports =  Menu;
