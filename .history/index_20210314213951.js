require('rootpath')();


var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));

app.listen('4000', function () {
    console.log('running on 4000...');
});