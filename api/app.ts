///<reference path="../typings/node/node.d.ts"/>
///<reference path="../typings/express/express.d.ts"/>
///<reference path="../typings/body-parser/body-parser.d.ts"/>
///<reference path="../typings/sequelize/sequelize.d.ts"/>

import express = require('express');
import bodyParser = require('body-parser');
import sequelize = require('sequelize');

var app = express();
var db = new sequelize('database', 'username', 'password');

var Contact = db.define('Contact', {

});

var port = process.env.port || 8080;

app.get('/', function(req : express.Request, res : express.Response){
    res.send('Home page.');
});

app.get('/api/matters', function(req, res){
    res.send('api/matters');
});

app.listen(port);
console.log('Magic happens on port ' + port);