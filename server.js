const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const session = require('express-session');

const User = require('./models/User');
const Truck = require('./models/Truck');
const Truck_Promotion = require('./models/Truck_Promotion');
const Promotion = require('./models/Promotion');
const Location = require('./models/Location');
const Menu = require('./models/Menu');
const Photo = require('./models/Photo');
const Photo_List = require('./models/Photo_List');


const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const truckRoutes = require('./routes/truck');
const menuRoutes = require('./routes/menu');

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

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use('/api', authRoutes);
server.use('/api/user', userRoutes);
server.use('/api/truck', truckRoutes);
server.use('/api/menu', menuRoutes);


Truck.belongsTo(User);
Truck.hasOne(Menu);

Truck.hasOne(Location);
User.hasOne(Location);

Photo.belongsToMany(Truck, {through: Photo_List});
Photo.belongsToMany(Menu, {through: Photo_List});
Photo.belongsToMany(User, {through: Photo_List});

Truck.belongsToMany(Promotion, {through: Truck_Promotion});

db.sync()
    .then(res => {
        return res.status(200).json({msg: 'Success!', body: res.body});
})
.catch(err => {
    console.log(err);
});

module.exports = server;
