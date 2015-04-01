cms.controller('splash',[
	"$scope",
	"$location",
	"api",
	"data", 
	function ($scope,$location,api,data){
		"use strict";

		console.log('splash');

		$scope.env = function(env){

			api.get().then(function (result){
				data.json = result;

				$location.path('/editor');
			});
		}

	}]);