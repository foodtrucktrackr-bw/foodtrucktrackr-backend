const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const User = require('./models/User');
const Truck = require('./models/Truck');
const Location = require('./models/Location');
const Menu = require('./models/Menu');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const truckRoutes = require('./routes/truck');
const secret = process.env.SESSION_SECRET;


// DB Server
const db = require('./data/connection');

// Node Server
const server = express();

// Use Sessions
server.use((req, res, next) => {
    if (!req.session.user) {
      return next();
    }
    User.findById(req.session.user.id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(err => console.log(err));
  });

// Log Dev Endpoint Res
server.use(morgan("dev"));

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', authRoutes);
server.use('/api/user', userRoutes);
server.use('/api/truck', truckRoutes);

Truck.hasOne(User);
Truck.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});

Truck.hasOne(Menu);
Menu.belongsTo(Truck);
User.hasMany(Menu, {through: Favorite})

Photo.belongsToMany(Truck, Menu, User, {through: PhotoList});

User.belongsToMany(Location, {through: UserLocation});
Truck.belongsToMany(Location, {through: UserLocation});

Truck.hasMany(Promotion, {through: TruckPromotion});

db.sync()
    .then(res => {
        return res.status(200).json({msg: 'Success!', body: res.body});
})
.catch(err => {
    console.log(err);
});

module.exports = server;
