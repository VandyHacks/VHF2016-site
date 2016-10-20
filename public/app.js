const path = require('path'); 
const express = require('express');
const webpack = require('webpack'); 
const pg = require('pg');
const config = require('../webpack.config.js');
const bodyParser = require('body-parser');
const app = express(); 

const oneDay = 86400000;
const publicPath = path.resolve(__dirname);
console.log(publicPath)
app.use(express.static(__dirname, { maxAge: oneDay }));

app.use(bodyParser.json());

app.get('/rsvp/:user_id', (req, res) => {
  let hashed_id = req.params.user_id;
  let client = new pg.Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
  });
  try {
    client.connect();
  } catch(err) {
    console.log(err);
  }
  let query = 'select id from hacker where hashed_id = \'' + hashed_id + '\';';
  client.query(query, function(err, result) {
    if (err) {
        console.log(err);
        console.log(query);
    }
    console.log(result.rows[0]);
    let hacker_id = result.rows[0].id;
    if (!hacker_id) {
      res.send('sorry, an error occurred');
    }
    query = 'update application set rsvp = TRUE where hackerid = \'' + hacker_id + '\'';
    let hacker_udate = client.query(query, function(err, result) {
        if (err) {
            console.log(err);
            console.log(query);
        }
        //console.log(result);
        console.log(hacker_id);
        res.send('you have registered! ' + hashed_id);
    });
  });
});

app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);
