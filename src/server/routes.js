const _ = require('lodash');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    app.use('/api', require('./api'));
    app.get('/version', function(req, res){
        res.send('cat side')
    });

    app.use(express.static('public'))
};