const path = require('path'); 
const express = require('express');
const webpack = require('webpack'); 
const config = require('../webpack.config.js');
const rsvp = require('./routes/rsvp.js');
const bodyParser = require('body-parser');
const app = express(); 

const oneDay = 86400000;
const publicPath = path.resolve(__dirname);
console.log(publicPath)
app.use(express.static(__dirname, { maxAge: oneDay }));

app.use(bodyParser.json());

rsvp.rsvp_get(app);
rsvp.rsvp_post(app);

app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);
