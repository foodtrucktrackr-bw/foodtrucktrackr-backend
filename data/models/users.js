const Sequelize = require('sequelize');
const connection = require('../connection');
const bcrypt = require('bcryptjs');

// Models
const User = connection.define('user', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    email: Sequelize.STRING,
    role: Sequelize.STRING,
    radius_size: Sequelize.INTEGER
    },
    // {
    //     hooks: User.beforeBulkCreate( async (password) => {
    //         try {
    //             console.log(password);
    //             const salt = bcrypt.genSaltSync(10);
    //             const hash = bcrypt.hashSync("Bacon", salt);
    //             console.log('Got User Pass: Before Hash')
    //             await ((password) {
    //                 bcrypt.hashSync("Facon",
    //                 return password = hash;
    //                 console.log(hash);
    //             })
    //         } catch (err) {
    //             if (err) console.log(err);
    //         }
    //     })},

connection.sync({
        force: true,
        logging: console.log
        }).then(() => {
    User.bulkCreate([{
        first_name: 'John',
        last_name: 'Smith',
        username: 'Jonny',
        password: 'abc123',
        user_email: '',
        user_role: 'Owner',
        user_radius_size: null,
    },
    {
        first_name: 'Suzy',
        last_name: 'Perkins',
        username: 'suzyq',
        password: 'abc123',
        user_email: 'susieq@gmail.com',
        user_role: 'Owner',
        user_radius_size: null,
    },
    {
        first_name: 'Rubber',
        last_name: 'Duckie',
        username: 'superhero',
        password: 'abc123',
        user_email: 'rduckie',
        user_role: 'Diner',
        user_radius_size: 15,
    },
    {
        first_name: 'Harry',
        last_name: 'Potter',
        username: 'seaker',
        password: 'abc123',
        user_email: 'lightninghead',
        user_role: 'Diner',
        user_radius_size: 7,
    }]);
}));

module.exports = User;
