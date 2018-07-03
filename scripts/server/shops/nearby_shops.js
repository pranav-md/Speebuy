var mongoose = require('mongoose');
var {Create_shop} = require('./shops/shop_schema');


var shops_nearby =function(req,res) {
    Create_shop.find({}, function(err, users) {
        var nearShops = {};
        var count=0;
        users.forEach(function(shop) {
          if(distance(req.lat,req.lng,shop.latitude,shop.longitude)<5)
          {
            nearShops[count++]={shop_name:shop.shop_name,
                                address:shop.address,
                                shop_latitude:shop.latitude,
                                shop_longitude:shop.longitude,
                                shop_phoneno:shop.contact_no,
                                shop_open:shop.open,
                                shop_delivery_provide:shop.delivery_avail,
                                shop_radius:shop.delivery_radius};
          }
        });
        if(count!=0)
            res.status(302).send(nearShops);
        else
            res.status(404).send("no shops nearby");  
      });    
};
function distance(lat1,lon1,lat2,lon2) {
    var R = 6371; 
    var dLat = (lat2-lat1) * Math.PI / 180;
	var dLon = (lon2-lon1) * Math.PI / 180;
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
		Math.sin(dLon/2) * Math.sin(dLon/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	if (d>1) return Math.round(d)+"km";
	else if (d<=1) return Math.round(d*1000)+"m";
	return d;
}

module.exports = shops_nearby;
