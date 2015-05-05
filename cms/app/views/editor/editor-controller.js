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

		$scope.currentView  = "home"
		$scope.previewMode  = false;

		$scope.views = [
			"home",
			"art",
			"websites",
			"about",
			"contact"
		];

		$scope.switchView = function (index) {
			$scope.currentView = $scope.views[index];
			$scope.page = $scope.json[$scope.currentView];
		}

		$scope.iconClass = function(view){

			var className;

			if(view == "home"){
				className = "icon-shop";
			}

			if(view == "art"){
				className = "icon-pen";
			}

			if(view == "websites"){
				className = "icon-display";
			}

			if(view == "about"){
				className = "icon-study";
			}

			if(view == "contact"){
				className = "icon-bubble";
			}

			return className;
		}

	}]);