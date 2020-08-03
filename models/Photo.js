const Sequelize = require('sequelize');
const connection = require('../data/connection');

// Models
const Photo = connection.define('photo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    photo_url: Sequelize.STRING,
    photo_description: Sequelize.STRING,
    photo_alt_text: Sequelize.STRING,
});

module.exports = Photo;
