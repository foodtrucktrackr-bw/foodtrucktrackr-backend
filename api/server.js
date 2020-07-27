const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const userRoutes = require('../data/controllers/userController');
const truckRoutes = require('../data/controllers/truckController');
const morgan = require('morgan');

// DB Server
const db = require('../data/connection');

// Node Server
const server = express();

// Log Dev Endpoint Res
server.use(morgan("dev"));

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/users', userRoutes);
server.use('/api/trucks', truckRoutes);

server.get("/api", (req, res) => {
	res.status(200).json({
		message: `API Running`
	})
})


module.exports = server;
