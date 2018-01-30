'use strict';

const
    express = require('express'),
    hotelService = require('../../../services/hotels');

let router = express.Router();

router.post('/', hotelService.getHotels);


module.exports = router;