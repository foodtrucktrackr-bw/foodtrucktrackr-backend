const Sequelize = require('sequelize');
const connection = require('../connection');

// Models
const Truck = connection.define('truck', {
    truck_name: Sequelize.STRING,
    truck_departure_time: Sequelize.INTEGER,
    truck_rating: Sequelize.INTEGER,
    truck_price_range: Sequelize.INTEGER,
    truck_cuisine_type: Sequelize.STRING,
    truck_description: Sequelize.STRING
});
connection.sync({
        force: true,
        logging: console.log
        }).then(() => {
    Truck.bulkCreate([{
        truck_name: 'Flaming Blue',
        truck_departure_time: 2045,
        truck_rating: 4,
        truck_price_range: 2,
        truck_cuisine_type: 'Dessert',
        truck_description: 'Fancy desserts with alchol. What could be better?'
    },
    {
        truck_name: 'French Fried',
        truck_departure_time: 1130,
        truck_rating: 5,
        truck_price_range: 3,
        truck_cuisine_type: 'French',
        truck_description: 'The best of Franch, fried!'
    }]);
});
