var express = require('express');
var router = express.Router();
const axios = require('axios');
const jpeg = require('jpeg-js');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/randomImage', function(req, res, next) {
	var width = 128;
	var height = 128;
	var imgData = [];
	//I exceed my quote for random bits it seems. My plan was to get the RGB values for each
	//pixel in groups of 10,000 (the max) at a time. This would take a total of 7 requests.
	//Instead, I generate them randomly here.
	/*
	axios.get('https://www.random.org/integers/?num=10000&min=0&max=255&col=1&base=16&format=plain&rnd=new')
	.then(function(resp) {
		var numbers = resp.data.split('\n');
		for(var i = 0; i < 10000; i++) {
			imgData[i] = Number('0x' + numbers[i]);
		}

		res.status(200).send({img: new ImageData(imgData, 128, 128)});
		
	})
	*/

	for(var i = 0; i < width * height * 4; i++) {
		imgData.push(Math.floor(Math.random() * 255));
	}
	res.status(200).send({img: imgData});

});

module.exports = router;
