const Sequelize = require('sequelize');

const connection = new Sequelize({
	dialect: 'sqlite',
	storage: '../data/food_trucks.db3'
  });

// Connection Test //
const dbserver = async () => {
	try {
		await connection.authenticate();
		console.log('Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
}
dbserver();

module.exports = connection;
