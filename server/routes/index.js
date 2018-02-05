'use strict';

const
    apiRoute = require('./apis'),
    homeRoute = require('./home')

function init(server) {
    server.get('*', function (req, res, next) {
        console.log('Request to: ' + req.originalUrl);
        return next();
    });
    // Add headers
    server.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    server.get('/', function (req, res) {
        res.redirect('/home');
    });

    server.use('/api', apiRoute);
    server.use('/home', homeRoute);
}

module.exports = {
    init: init
};