const express = require('express');
const router = express.Router();
const db = require('../_helpers/db');
const bcrypt = require("bcryptjs");
module.exports = router;
// //Scehama import
const User = db.User;

router.post('/register', async (req ,res ,next)=>{
    const reqData = req.body;
      //  console.log(req.body)
    if(await User.findOne({email:reqData.email})){
        res.status(500).json('Errorr')
    }
  const user = new User(reqData);
  if(reqData.password){
    user.hash = bcrypt.hashSync(reqData.password, 10);  
  }
// save user
if(await user.save()){
    res.status(200).json('User save done')
};

});



// exports.register = async (req ,res ,next)=>{
//     res.status(200).json({
//         message: "Here we are handling the get request for the products"
//     });
// }