dod.controller('loading',['$scope', 'content', function ($scope, content) {
	"use strict";

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.ready = content.ready;

		console.log('loaded');
	});

	$scope.$on('loadingMsg', function (msg,val){
		$scope.msg = val;
	});

	$scope.$on('remaining', function (o,count){
		$scope.percent = 100/count.total * count.remaining;
	});

}]);