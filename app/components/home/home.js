angular.module('app.home', [])

	.controller('HomeController', [function () {    
		this.name = 'Friend';
		console.log('home controller loaded')
	}

]);