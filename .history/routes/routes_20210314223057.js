const express=require('express');
const router=express.Router();
const userAPI=require('../users/users.controller');

router.post('/register', userAPI.register)


module.exports=router;