const _ = require('lodash');
const express = require('express');
const compression = require('compression');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    // app.use(methodOverride());
    // app.use(cookieParser());

    app.use('/api', require('./api'));
    app.get('/version', function(req, res){
        res.send('cat side')
    });

    app.use(express.static('public'))
};