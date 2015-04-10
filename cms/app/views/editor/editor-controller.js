cms.controller('editor',[
	'$scope',
	'$location',
	'$sce',
	'api',
	'data', 
	function ($scope, $location, $sce,  api, data){
		"use strict";


		if(!$scope.json){
			
			api.get().then(function (result){
				$scope.json = result;
				$scope.page = $scope.json[$scope.currentView];
				$scope.ready = true;
			});
			
		} else {

			$scope.json = data.json
			$scope.page = $scope.json[$scope.currentView];
			$scope.ready = true;
		}

		$scope.currentView = "home"

		$scope.views = [
			"home",
			"art",
			"websites",
			"about",
			"contact"
		];

		$scope.switchView = function (index) {
			console.log(index);
			$scope.currentView = $scope.views[index];
			$scope.page = $scope.json[$scope.currentView];
		}


	}]);