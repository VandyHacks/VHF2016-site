"use strict";
var pg = require('pg');
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var express = require('express');
var app = express();
// require('dotenv').config();
// the above line should be uncommented when run locally and commented back again when pushed
//console.log(process.env.DB);

var client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
});
client.connect(); //pg connect is better?

var port = process.env.PORT || 8080;        // set our port


// checkin api calls
app.route('/checkin')
	.get(function(req, res){
		var email = req.query.email;
		console.log("GET request to check email " + email);

		// returns t/f for if email is in table     (could select applicant name for display)
		var query_check = "select application.id, hacker.first_name, hacker.last_name, hacker.phone_number, application.accepted, application.rsvp, application.attended from hacker, application where hacker.email='" + email + "' and hacker.id = application.hackerid";	 	// insecure?
		var query_update = "update application set attended = true where id = $1::int";

		client.query(query_check, function(err, result) {
	        if (err) {
	            console.log(err); console.log(query);
	            res.status(400).send(false);
	            return;
	        }
	        console.log(result);
	        var name = result.rows[0].first_name + " " + result.rows[0].last_name;
	        var reply = {};	        
        
	        if (!result.rows[0])
	        	reply = {success: false, message: "Email " + email + " not found in database"};
	        else if (result.rows[0].accepted === null)
	        	reply = {success: false, message: "Hacker " + name + " has no decision on acceptance?.."};
        	else if (!result.rows[0].accepted)
	        	reply = {success: false, message: "Hacker " + name + " wasn't accepted"};		// accepted could be null i.e. no decision
	        else if (!result.rows[0].rsvp)
	        	reply = {success: false, message: "Hacker " + name + " didn't rsvp"};
	        else{	        	// already checked in?
	        	client.query(query_update, [result.rows[0].id]);
	        	reply = {success: true, message: "Welcome " + name};
	        }


	        //  Check phone number
	        reply["phone"] = checkPhone(result.rows[0].phone_number);
	        reply["number"] = result.rows[0].phone_number;

	        res.status(200).send(reply);	        
      	});      	
	});


app.listen(port);							// Listen for calls



function checkPhone(number){
	var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	var valid = exp.test(number);
	// console.log(number + " " + valid);

	return valid
}