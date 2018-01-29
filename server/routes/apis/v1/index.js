'use strict';

const
    express = require('express'),
    hotelsController = require('../../../controllers/apis/hotels');

let router = express.Router();

router.use('/hotels', hotelsController);

module.exports = router;