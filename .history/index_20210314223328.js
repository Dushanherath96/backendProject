require('rootpath')();
const cors = require('cors');
var express = require('express');
const route = require("./routes/routes");
var app = express();
var bodyParser = require('body-parser');
//const shell = require('shelljs');
const config = require("./config.json");

app.use(cors());
app.use(cors({ origin: config.prodEnvironment }));
app.use(bodyParser.json({ limit: config.bodyParser }));


// A sample route
// app.use('/users', require('./users/users.controller'));
app.use("/routes", route);



app.listen('3000', function () {
    console.log('running on 4000...');
});