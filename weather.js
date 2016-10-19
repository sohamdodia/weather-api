var request = require('request');
module.exports = function(location,callback) {
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=imperial&APPID=4c6f4dc3a1d96e2e15c6f5fbd6b4f6a7';
		if(!location) {
			return callback('Unable to guess location');
		}
		request({
			url : url,
			json : true	
		},function (error,response,body) {
			if(error) {
				callback('Unable to fetch weather');
			} else {
				callback('It\'s ' + body.main.temp + ' fahrenheit  in ' + body.name + ' !');
			}
	});
}
