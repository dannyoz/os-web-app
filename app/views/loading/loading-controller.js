dod.controller('loading',['$scope', 'content', function ($scope, content) {
	"use strict";

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.ready = content.ready;

		console.log('loaded');
	});

}]);