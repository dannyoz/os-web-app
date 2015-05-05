dod.controller('contact',['$scope', 'content', 'api', function ($scope, content, api) {
	"use strict";
	
	//Use cached data if request is already made
	if(content.ready){	
		$scope.page     = content.data.contact;
		$scope.ready    = content.ready;
	}

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.page     = content.data.contact;
		$scope.ready    = content.ready;
	});

	$scope.messageStatus = "pending"
	$scope.message = {
		name : "Name",
		subject : "Subject",
		email : "e-mail",
		text : "Message"
	}

	$scope.sendMessage = function(msg){

		api.getContent('messages').success(function (data){

			$scope.messages = data.messages;
			$scope.messages.push($scope.message);

			var obj = angular.copy($scope.messages);

			api.postMessage(obj).success(function (result){
				
				$scope.messageStatus = "sent"

			}).error(function (data, status, headers, config){

				$scope.messageStatus = "error"

				console.log("Post error : " , data);
				console.log("status : " , status);
				console.log("headers : " , headers);
				console.log("config : " , config);
			});

		});

		
		
	};

}]);