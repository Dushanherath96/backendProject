require('rootpath')();

const cors = require('cors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//const shell = require('shelljs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// A sample route
// app.use('/users', require('./users/users.controller'));
app.use('/users' , require())

app.use(express.static('../client'));

app.listen('3000', function () {
    console.log('running on 4000...');
});