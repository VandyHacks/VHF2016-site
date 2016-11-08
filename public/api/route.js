"use strict";
var pg = require('pg');
var express = require('express');
var router = express.Router()
//require('dotenv').config();
// the above line should be uncommented when run locally and commented back again when pushed
//console.log(process.env.DB);

var pool = getPool();

function getPool() {
  var config = {
    user: process.env.DB_USER,
    database: process.env.DB,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: 5432,
    max: 500, // max number of clients in the pool
    idleTimeoutMillis: 15000,
    ssl: true,
  };
  return new pg.Pool(config);
}


// checkin api calls
router.get('/checkemail', function(req, res){
	var email = req.query.email.toLowerCase();
	console.log("GET request to check email " + email);

	// returns t/f for if email is in table     (could select applicant name for display)
	var query_check = "select hacker.first_name, hacker.last_name, hacker.phone_number, hacker.school, hacker.shirt_size, hacker.food_restriction, application.accepted, application.rsvp, application.attended from hacker, application where hacker.email='" + email + "' and hacker.id = application.hackerid";	 	// insecure?
  pool.connect().
    then(client => {
      return client
        .query(query_check)
        .then(query_res => {
          if (query_res.rowCount === 0) {
            console.log('couldn\'t find email');
        	  res.status(404).send({success: false, message: "Email " + email + " not found in database"});
          }
          else {
            var hacker = query_res.rows[0];
            var name = hacker.first_name + " " + hacker.last_name;
            var reply = {};	              	               	

            if (!query_res.rows[0].accepted) {
            	reply = {success: false, message: "Hacker " + name + " wasn't accepted"};
            }
              // accepted could be null i.e. no decision
            else if (!query_res.rows[0].rsvp) {
            	reply = {success: false, message: "Hacker " + name + " didn't rsvp"};
            }
            else {
            	reply = {
                success: true,
                message: "Welcome " + name,
                name: name,
                school: hacker.school,
                tshirt_size: hacker.shirt_size,
                dietary_restrictions: hacker.food_restriction,
                phone_valid: checkPhone(hacker.phone_number),
                phone_number: hacker.phone_number
              };
            }
            res.status(200).send(reply);	
          }
        })
        .catch(e => {
          client.release()
          res.status(400).send({success: false, message: "Error: " + err});
          console.log(e)
        })
        .then(() => client)
    })
    .then(client => client.release())
    .then(() => res.status(400).send())
});

router.post('/checkin', function(req, res){
	var email = req.body.email && req.body.email.toLowerCase();
	console.log("POST request to checkin email " + email);
	
	var query_update = "update application set attended = true where id in (select application.id from hacker, application where hacker.email='" + email + "' and hacker.id = application.hackerid)";

  pool.connect().
    then(client => {
      return client
        .query(query_update)
        .then(query_res => {
          if (query_res.rowCount === 0) {
            console.log('no update');
            res.status(200).send(false);	
          }
          else {
            res.status(200).send(true);	
          }
        })
        .catch(e => {
          client.release()
          console.log(err); console.log(query);
          res.status(400).send(false);
        })
        .then(() => client)
    })
    .then(client => client.release())
});

module.exports = router;


function checkPhone(number){
	var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	var valid = exp.test(number);
	// console.log(number + " " + valid);

	return valid
}
