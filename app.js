var screenshot = require('url-to-screenshot');
var fs = require('fs');

var url = 'http://localhost:8888/moreApp/';

var screenshots = [
	{
		"title":"iPhone_4",
		"w":"640",
		"h":"960"
	},{
		"title":"iPhone_5",
		"w":"640",
		"h":"1136"
	},{
		"title":"iPhone_6",
		"w":"750",
		"h":"1334"
	},{
		"title":"iPhone_6_Plus ",
		"w":"1242",
		"h":"2208"
	},{
		"title":"iPad_non_retina",
		"w":"768",
		"h":"1024"
	},{
		"title":"iPad_retina",
		"w":"1536",
		"h":"2048"
	}
]

var i = 5;

var to = 2000;

screenshot(url)
	.width(screenshots[i].w)
	.height(screenshots[i].h)
	.timeout(to)
	.capture(function(err, img) {
		if (err) throw err;
		fs.writeFileSync(__dirname + '/' + screenshots[i].title + '_' + screenshots[i].w + 'x' + screenshots[i].h + '.png', img);
	});

screenshot(url)
	.width(screenshots[i].h)
	.height(screenshots[i].w)
	.timeout(to)
	.capture(function(err, img) {
		if (err) throw err;
		fs.writeFileSync(__dirname + '/' + screenshots[i].title + '_' + screenshots[i].w + 'x' + screenshots[i].h + '_landscape.png', img);
	});