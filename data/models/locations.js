const Sequelize = require('sequelize');
const connection = require('../connection');

// Models
const Location = connection.define('location', {
    location_latitude: Sequelize.GEOGRAPHY,
    location_longitude: Sequelize.GEOGRAPHY,
    location_address: Sequelize.STRING,
    location_city: Sequelize.STRING,
    location_state: Sequelize.STRING,
    location_zip_code: Sequelize.INTEGER
});
connection.sync({
        force: true,
        logging: console.log
        }).then(() => {
    Location.bulkCreate([{
        location_latitude: null,
        location_longitude: null,
        location_address: '1234 Main St',
        location_city: 'Irvine',
        location_state: 'CA',
        location_zip_code: 92663
    },
    {
        location_latitude: null,
        location_longitude: null,
        location_address: '2048 1st St.',
        location_city: 'Austin',
        location_state: 'TX',
        location_zip_code: 78701
    }]);
});
