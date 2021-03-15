const express = require('express');
const router = express.Router();
const db = require('_helpers/db');

//Scehama import
const User = db.User;

module.exports = router;
router.post('/signUp', signUp);




async function  signUp(req ,res, next)
{
        return;
}