"use strict";
var pg = require('pg');
var express = require('express');
var router = express.Router()
require('dotenv').config();
// the above line should be uncommented when run locally and commented back again when pushed

var pool = getPool();
var next_food_group_num = 2;
var mutex_options = {
  'url':process.env.REDIS_URL,
}
var mutex = require( 'node-mutex' )(mutex_options);

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
  var api_key = req.query.api_key;
  if (api_key !== process.env.CHECKIN_API_KEY) {
    res.status(401).send({'error':'unauthorized'});
    return;
  }
  email = email.replace(/<(?:.|\n)*?/gm,'');
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
            var reply = null;	              	               	

            if (!query_res.rows[0].accepted) {
            	reply = {success: false, message: "Hacker " + name + " wasn't accepted"};
            }
              // accepted could be null i.e. no decision
            else if (!query_res.rows[0].rsvp) {
              reply = {success: false, message: "Hacker " + name + " didn't rsvp"};
            }
            let food_group = 1;
            if (!hacker.food_restriction && !reply) {
              mutex.
                lock('next_food_group').
                then( unlock => {
                  food_group = next_food_group_num;
                  if (next_food_group_num === 2) {
                    next_food_group_num = 3;
                  } else {
                    next_food_group_num = 2;
                  }
                 	reply = {
                    dietary_restrictions: hacker.food_restriction,
                    food_group: food_group,
                    message: "Welcome " + name,
                    name: name,
                    phone_number: hacker.phone_number,
                    phone_valid: checkPhone(hacker.phone_number),
                    school: hacker.school,
                    success: true,
                    tshirt_size: hacker.shirt_size,
                  };
                  res.status(200).send(reply);	
                  unlock();
                });
            } else {
              reply = reply || {
                dietary_restrictions: hacker.food_restriction,
                food_group: food_group,
                message: "Welcome " + name,
                name: name,
                phone_number: hacker.phone_number,
                phone_valid: checkPhone(hacker.phone_number),
                school: hacker.school,
                success: true,
                tshirt_size: hacker.shirt_size,
              };
              res.status(200).send(reply);	
            }

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
});

router.post('/checkin', function(req, res){
  var api_key = req.body.api_key;
  if (api_key !== process.env.CHECKIN_API_KEY) {
    res.status(401).send({'error': 'unauthorized'});
    return;
  }
  console.log(req.body);
	var email = req.body.email &&
    req.body.email.toLowerCase().replace(/<(?:.|\n)*?/gm,'');
  let food_group = req.body.food_group &&
    req.body.food_group.toString().replace(/<(?:.|\n)*?/gm,'');
	
  console.log("POST request to checkin email " + email);
	
	var application_update = "update application set attended = true where id in (select application.id from hacker, application where hacker.email='" + email + "' and hacker.id = application.hackerid)";
	var food_group_update = "update hacker set food_group = " + food_group +
    " where hacker.email='" + email + "';";
  pool.connect().
    then(client => {
      return client
        .query(application_update)
        .then(query_res => {
          if (query_res.rowCount === 0) {
            console.log('no update');
          }
        })
        .catch(e => {
          client.release()
          console.log(err); console.log(query);
          res.status(400).send(false);
        })
        .then(() => client)
    })
    .then(client => {
      return client
        .query(food_group_update)
        .then(query_res => {
          if (query_res.rowCount === 0) {
            console.log('--------- no food group update ------------');
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
    .then(() => res.status(200).send(true))
});

module.exports = router;


function checkPhone(number){
	var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	var valid = exp.test(number);
	// console.log(number + " " + valid);

	return valid
}
