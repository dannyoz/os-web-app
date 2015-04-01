cms.controller('editor',[
	'$scope',
	'$location',
	'data', 
	function ($scope, $location, data){
		"use strict";

		$scope.json = data.json

		if(!$scope.json){
			$location.path('/');
		}

	}]);