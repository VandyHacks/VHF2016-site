console.log("working");

"use strict";
var pg = require('pg');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var express = require('express');
var app = express();
require('dotenv').config();
// the above line should be uncommented when run locally and commented back again when pushed
//console.log(process.env);

var client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
});
client.connect();

var port = process.env.PORT || 8080;        // set our port


// checkemail api calls
app.route('/checkemail')
	.get(function(req, res){
		var email = req.query.email;
		console.log("GET request to check email " + email);

		// returns t/f for if email is in table     (could select applicant name for display)
		var query = "select exists(select 1 from application where email='" + email + "')";

		client.query(query, function(err, result) {
	        if (err) {
	            console.log(err);
	            console.log(query);
	            res.status(400).send(false);
	            return;
	        }
        
        	if (result.rows[0])
	        	res.status(200).send(true);
	        else 
	        	res.status(200).send(false);
      	});
	});

// checkin api calls
app.route('/checkin')
	.post(function(req, res){
		console.log("POST request to check in email " + req.query.email);
		
		var query = "update application set attended = true where email='" + email + "')";

		client.query(query, function(err, result) {
	        if (err) {
	            console.log(err);
	            console.log(query);
	            res.status(400).send(false);
	            return;
	        }
                	
	        res.status(200).send(true);	        	        	
      	});
	});


app.listen(port);				// Listen for calls