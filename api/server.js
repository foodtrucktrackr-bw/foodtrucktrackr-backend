const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const userRoutes = require('../routes/users.js');
const truckRoutes = require('../routes/trucks.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/users', userRoutes);
server.use('/trucks', truckRoutes);

server.get("/", (req, res) => {
	res.status(200).json({
		message: `API Running`
	})
})

module.exports = server;
