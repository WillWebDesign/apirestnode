'use strict';

const
    hotels = require('../../db/data.json');


function getHotels(req, res) {
    res.json(hotels);
}

module.exports = {
    getHotels: getHotels
};
