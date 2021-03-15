const express = require('express');
const router = express.Router();
// const db = require('../_helpers/db');
module.exports = router;
// //Scehama import
// const User = db.User;





exports.register = async (req ,res ,next)=>{
    res.status(200).json({
        message: "Here we are handling the get request for the products"
    });
}