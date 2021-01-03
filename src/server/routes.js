const _ = require('lodash');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use('/api', require('./api'));

    app.use(express.static('public'))
};