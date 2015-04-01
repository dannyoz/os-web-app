dod.controller('navigation',['$scope', 'content', function ($scope, content) {
	"use strict";

	//Use cached data if request is already made
	if(content.ready){	
		$scope.nav     = content.data.navigation;
		$scope.ready   = content.ready;
	}
	
	$scope.showNav = false;

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.nav   = content.data.navigation;
		$scope.ready = content.ready;
	});

}]);