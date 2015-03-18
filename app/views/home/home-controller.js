dod.controller('home',['$scope', 'api', function ($scope, api) {
	"use strict";
	
	console.log('home derp');

	api.getHomePage().then(function(result){
		console.log(result);
	});
}]);