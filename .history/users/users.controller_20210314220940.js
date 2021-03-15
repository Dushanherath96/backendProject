const express = require('express');
const router = express.Router();
const db = require('_helpers/db');

//Scehama import
const User = db.User;


router.post('/signUp', signUp);




function signUp(req ,res, next)
{
    
}