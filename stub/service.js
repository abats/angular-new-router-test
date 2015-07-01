var Interfake = require('interfake');
var interfake = new Interfake();

interfake.get('/api/news').body({
	news : [
		{
			"id": 1,
			"title": "News message 1",
			"author": "Arno Bats",
			"content": "This is the content of a news message. Sometimes I like to eat a banana, and sometimes I do not. Let this be the lesson of today.",
			"date": "25/06/2015"
		},
		{
			"id": 2,
			"title": "News message 2",
			"author": "Arno Bats",
			"content": "This is the content of a news message. Sometimes I like to eat a banana, and sometimes I do not. Let this be the lesson of today.",
			"date": "25/06/2015"
		},
		{
			"id": 2,
			"title": "News message 2",
			"author": "Arno Bats",
			"content": "This is the content of a news message. Sometimes I like to eat a banana, and sometimes I do not. Let this be the lesson of today.",
			"date": "25/06/2015"
		}
	]

});

interfake.listen(3000);