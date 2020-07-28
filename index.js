const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const {users, trucks, favorite_trucks} = require('./data')
const PORT = process.env.PORT || 5000;
const server = express();
let userID = 3;
let truckID = 3;

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
	res.status(200).json({
		message: `API Running`
	})
})

server.post('/user',(req,res) => {
  const required = ['username', 'password', 'user_email', 'user_role']
  for(requiredField of required) {
    if(!req.body[requiredField]) return res.status(400).json({error: "Required Fields"})
  }
  if(req.body.user_role.toLowerCase() !== 'operator' && req.body.user_role.toLowerCase() !== "diner") 
    return res.status(400).json({error: "User role must be operator or diner"})

  for(user of users){
    console.log(user)
    if (user.user_email.toLowerCase() === req.body.user_email.toLowerCase() || user.username.toLowerCase() === req.body.username.toLowerCase())
      return res.status(400).json({error: "User email and username must be unique"})
  }
  users.push({...req.body, id: userID })
  const createdUser = users.find(x => x.id === userID)
  userID++
  return res.status(201).json(createdUser)
})


server.post('/user/auth/login',(req,res) => {
  const required = ['user_email', 'password']
  for(requiredField of required) {
    if(!req.body[requiredField]) return res.status(400).json({error: "Required Fields"})
  }
  const user = users.find(x => x.user_email.toLowerCase() === req.body.user_email.toLowerCase())
  if(!user) return res.status(400).json({error: "No user with that email"})
  if(user.password !== req.body.password)
    return res.status(401).json({error: "You shall not pass"})
  return res.status(201).json({token: "TOKEN", id: user.id})
})

server.get('/user/:id', (req,res) => {
  const {id} = req.params;
  const user = users.find(x => x.id === +id)
  if(!user) return res.status(404).json({error: "No user found with that id"})
  if(user.user_role.toLowerCase() === "operator")
    user.ownedTrucks = trucks.filter(x => x.user_id === user.id)
  if(user.user_role.toLowerCase() === "diner"){
    const favoritesID = new Set(favorite_trucks.filter(x => x.user_id === user.id).map(x => x.truck_id))
    const favoriteTrucks = trucks.filter(x => favoritesID.has(x.id))
    user.favoriteTrucks = favoriteTrucks
  }
  delete user.password
  return res.status(200).json(user)
})

const checkForToken = (req,res,next) => {
  if(!req.headers.authorization)
    return res.status(403).json({error:"No Token"})
  next()
}
server.use(checkForToken)

server.get('/trucks',(req,res) => {
  const {location, cuisine, operator} = req.query;
  let returningTrucks = [...trucks]
  if(location)
    returningTrucks = returningTrucks.filter(x => x.location_city.toLowerCase() === location || x.location_zip_code.toLowerCase() === location)
  if(cuisine)
    returningTrucks = returningTrucks.filter(x => x.truck_cuisine_type.toLowerCase() === cuisine)

  const currentDate = new Date()
  returningTrucks = returningTrucks.filter(x => {
    const startingHour = x.truck_arrival_time.getHours()
    const startingMinutes = x.truck_arrival_time.getMinutes()
    const departingHour = x.truck_departure_time.getHours()
    const departingMinutes = x.truck_departure_time.getMinutes()
    const currentHour = currentDate.getHours()
    const currentMinutes = currentDate.getMinutes()
    if(currentHour < startingHour || (currentHour === startingHour && currentMinutes < startingMinutes))
      return false
    if(currentHour > departingHour || (currentHour === departingHour && currentMinutes > departingMinutes))
      return false
    return true
  })
  return res.status(200).json(returningTrucks)
})

server.get("/trucks/operator/:id",(req,res) => {
  const {id} = req.params
  const user = users.find(x => x.id === +id)
  if(!user) return res.status(404).json({error: "No user found with that id"})
  if(user.user_role.toLowerCase() !== "operator") return res.status(401).json({error: "User ID must be from an operator and not a diner"})
  const returningTrucks = trucks.filter(x => x.user_id === user.id)
  return res.status(200).json(returningTrucks) 
})

server.get('/trucks/:id', (req, res) => {
  const {id} = req.params;
  const truck = trucks.find(x => x.id === +id)
  if(!truck) return res.status(404).json({error: "No truck with that id"})
  return res.status(200).json(truck)
})

// server.post('/trucks', (req,res) => {
//   const required = ['truck_name' , 'truck_departure_time', 'truck_arrival_time', 'user_id', 'location_zip_code', 'location_city', 'location_address', 'location_state']
//   for(requiredField of required) {
//     if(!req.body[requiredField]) return res.status(400).json({error: "Required Fields"})
//   }
  
// })



server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
