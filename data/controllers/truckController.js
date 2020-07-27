const express = require('express');
const router = express.Router();
const {QueryTypes} = require('sequelize');
const models= require('../models/trucks');

// Get All Trucks
router.get('/', async (req, res) => {

    try {
        console.log('Trucks Endpoint');
        const trucks = await models.Truck.findAll();
        console.log(trucks.every(truck => truck instanceof Truck)); // true
        console.log("All trucks:", JSON.stringify(trucks, null, 2));
    } catch (err) {
        logger.error(err);
        res.status(401);
        return res.send({
            error: 'Invalid username or password'
        });
    }});

//  // Add New Truck
// router.post('/truck:id', async (req, res) => {

//     try {

//     }
//     catch (ex) {
//         logger.error(ex);
//         res.status(400);
//         return res.send({ error: ex });
//     }
// });

// // Update Truck With Id
// router.put('/truck:id', async (req, res) => {

//     await sequelize.query(
//         'SELECT * FROM projects WHERE status = :id',
//         {
//           replacements: { status: 'active' },
//           type: QueryTypes.SELECT
//         }
//       );

//     try {
//         await models.User.update({
//             userName,
//             email
//         }, {
//                 where: {
//                     id: userId
//                 }
//             })
//         return res.send({ message: 'User created' });
//     }
//     catch (ex) {
//         logger.error(ex);
//         res.status(400);
//         return res.send({ error: ex });
//     }
// });

    // router.put('/logout', authCheck, async (req, res) => {
    // const token = req.headers.authorization;
    // const password = req.body.password;
    // const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // const userId = decoded.data.userId;
    // try {
    //     const hashedPassword = await bcrypt.hash(password, saltRounds)
    //     await models.User.update({
    //         hashedPassword
    //     }, {
    //             where: {
    //                 id: userId
    //             }
    //         })
    //     return res.send({ message: 'User created' });
    // }
    // catch (ex) {
    //     logger.error(ex);
    //     res.status(400);
    //     return res.send({ error: ex });
    // }});

    module.exports = router;
