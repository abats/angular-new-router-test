var Interfake = require('interfake');
var interfake = new Interfake();

interfake.get('/api/test').body({
	test : 'Some test yo'
});

interfake.listen(3000);