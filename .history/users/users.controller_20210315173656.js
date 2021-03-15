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
      try{
        const findUser = await  User.findOne({email:reqData.email} , function(err , result){
            if(err){
                console.log(err)
                res.status(500).json(err);
        }else{
            if(result){
                res.status(406).json('This account is already in the system');
            }
        }
        if(!findUser){
            const user = new User(reqData);
            if(reqData.password){
                user.hash = bcrypt.hashSync(body.password, 10);

            }
             user.save()
        }
        })
      }catch(err){
        res.status(500).json(err);
      }
  

});



// exports.register = async (req ,res ,next)=>{
//     res.status(200).json({
//         message: "Here we are handling the get request for the products"
//     });
// }