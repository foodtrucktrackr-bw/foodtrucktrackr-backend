const Sequelize = require('sequelize');
const connection = require('../connection');

// Models
const Menu = connection.define('menu', {
    menu_truck: Sequelize.INTEGER,
    menu_promotion: Sequelize.INTEGER,
    menu_item_name: Sequelize.STRING,
    menu_item_description: Sequelize.STRING,
    menu_item_price: Sequelize.INTEGER
    });
connection.sync({
    force: true,
    logging: console.log
    }).then(() => {
Menu.bulkCreate([{
    menu_truck: 1,
    menu_promotion: null,
    menu_item_name: 'Blue Vodka',
    menu_item_description: 'Top shelf bluberries, flash fired with equally top shelf vodka.',
    menu_item_price: 10,
    },
    {
    menu_truck: 2,
    menu_promotion: null,
    menu_item_name: 'Baguette De Crisp',
    menu_item_description: 'Soft on the inside, fried golden. Handmade orange butter.',
    menu_item_price: 15,
    }]);
});
