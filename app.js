const path = require('path'); 
const express = require('express');
const webpack = require('webpack'); 
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express(); 

const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(__dirname)); 
app.get('/', function response(req, res) {  
  res.sendFile(path.join(__dirname, './index.html'));
});


app.listen(process.env.PORT || 3000);
