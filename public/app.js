const path = require('path');
const express = require('express');
const webpack = require('webpack');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../webpack.config.js');
const api = require('./api/route.js');
const rsvp = require('./routes/rsvp.js');
const checkin = require('./routes/checkin.js');
const bodyParser = require('body-parser');
const app = express();

// pug used for qr code
app.set('view engine', 'pug')
app.set('views', 'public/views');
app.use(cors());

const oneDay = 86400000;
const publicPath = path.resolve(__dirname);
console.log(publicPath)
app.use(express.static(__dirname, { maxAge: oneDay }));
app.use(morgan('combined',{}));

app.use(bodyParser.json());
app.use('/api', api);

rsvp.rsvp_get(app);
rsvp.rsvp_post(app);
checkin.checkin_qrcode_get(app);

app.get('/', function response(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(process.env.PORT || 3000);
