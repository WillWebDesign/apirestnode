'use strict';

const
    hotels = require('../../db/data.json');


function getHotels(req, res) {
    if(req.body.filter){
        let response ;
        if(req.body.filter.name){
            let name = req.body.filter.name.toLowerCase();
            response = hotels.filter((hotel)=>{
                hotel.name = hotel.name.toLowerCase();
                return hotel.name.indexOf(name) >= 0;
            });
        }else{
            response = hotels;
        }
        if(req.body.filter.stars){
            response = response.filter((hotel)=>{
                return req.body.filter.stars == hotel.stars;
            });
        }
        res.json(response);
    }else{
        res.json(hotels);
    }
}

module.exports = {
    getHotels: getHotels
};
