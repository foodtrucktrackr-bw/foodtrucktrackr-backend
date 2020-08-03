const mysql = require('mysql2');
const Sequelize = require('sequelize');

const dbhost = process.env.DB_HOST || 'localhost';
const dbname = process.env.DB_NAME || 'db';
const dbusername = process.env.DB_USERNAME || 'user';
const dbpassword = process.env.DB_PASSWORD || 'pass';

const connection = new Sequelize(dbname, dbusername, dbpassword,
	{
	host: dbhost,
	dialect: 'mysql'
});

module.exports = connection;
