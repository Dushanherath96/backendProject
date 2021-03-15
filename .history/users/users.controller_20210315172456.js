const express = require('express');
const router = express.Router();
const db = require('../_helpers/db');
module.exports = router;
// //Scehama import
const User = db.User;

router.post('/register', async (req ,res ,next)=>{
    const reqData = req.body;
      //  console.log(req.body)
      try{
        const findUser = User.findOne({email:reqData.email} , function(err , result){
            if(err){
                res.status(500).json(err);
        }

        })
      }catch(err){
          
      }
  
    res.status(200).json({
        message: "Here we are handling the get request for the products"
    });
});



// exports.register = async (req ,res ,next)=>{
//     res.status(200).json({
//         message: "Here we are handling the get request for the products"
//     });
// }