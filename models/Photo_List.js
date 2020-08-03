const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Photo_List = connection.define('photo_list', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    photo_id: Sequelize.INTEGER,
    truck_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    menu_id: Sequelize.INTEGER,
    menu_item_id: Sequelize.INTEGER

});

module.exports = Photo_List;
