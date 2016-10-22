console.log("working");

"use strict";
var pg = require('pg');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var express = require('express');
var app = express();
// require('dotenv').config();
// the above line should be uncommented when run locally and commented back again when pushed
var client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
});
//client.connect();
//console.log(process.env);

var port = process.env.PORT || 8080;        // set our port

app.route('/checkemail')
	.get(function(req, res){
		console.log("GET request to check email " + req.query.email);
		res.send(req.query);
	});

app.route('/checkin')
	.post(function(req, res){
		console.log("POST request to check in email " + req.query.email);
		res.send(req.query);
	});

app.listen(port);