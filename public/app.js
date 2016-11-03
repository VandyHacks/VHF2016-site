const path = require('path'); 
const express = require('express');
const webpack = require('webpack'); 
const config = require('../webpack.config.js');
const rsvp = require('./routes/rsvp.js');
const checkin = require('./routes/checkin.js');
const bodyParser = require('body-parser');
const app = express(); 

// pug used for qr code
app.set('view engine', 'pug')
app.set('views', 'public/views');

const oneDay = 86400000;
const publicPath = path.resolve(__dirname);
console.log(publicPath)
app.use(express.static(__dirname, { maxAge: oneDay }));


app.use(bodyParser.json());

rsvp.rsvp_get(app);
rsvp.rsvp_post(app);
checkin.checkin_qrcode_get(app);

app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);
