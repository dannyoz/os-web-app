dod.controller('contact',['$scope', 'content', 'api', function ($scope, content, api) {
	"use strict";
	
	//Use cached data if request is already made
	$scope.page     = content.data.contact;
	$scope.messages = content.data.messages;
	$scope.ready    = content.ready;

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.page     = content.data.contact;
		$scope.messages = content.data.messages;
		$scope.ready    = content.ready;
	});

	$scope.message = {
		name : "Name",
		subject : "Subject",
		email : "e-mail",
		text : "Message"
	}

	$scope.sendMessage = function(msg){

		console.log($scope.messages);
		
	};

}]);