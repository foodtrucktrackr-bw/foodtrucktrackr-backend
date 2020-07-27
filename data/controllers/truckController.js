const express = require('express');
const router = express.Router();
const db = require('../connection');
const models= require('../models/trucks');
const { permittedCrossDomainPolicies } = require('helmet');

// Get All Trucks
router.get('/', (req, res, next) => {

    console.log('Trucks Endpoint');
    res.status(200).json(res.data);

    // const result = await db.models.trucks;
    // console.log(`=========${res}/n${req}=========`);

    // try {
    //     return result;
    // } catch (err) {
    //     res.status(500).json({message: 'Something went wrong.'})
    // }

});

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
