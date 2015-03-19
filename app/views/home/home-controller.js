dod.controller('home',['$scope', 'content', function ($scope, content) {
	"use strict";

	//Use cached data if request is already made
	$scope.page  = content.data.home;
	$scope.ready = content.ready;

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.page  = content.data.home;
		$scope.ready = content.ready;
	});

}]);