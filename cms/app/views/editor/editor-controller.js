cms.controller('editor',[
	'$scope',
	'$location',
	'$routeParams',
	'$sce',
	'api',
	'data', 
	function ($scope, $location, $routeParams, $sce,  api, data){
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

		$scope.previewMode  = false;
		$scope.showDialogue = false;
		$scope.singleView   = false;

		$scope.views = [
			"home",
			"art",
			"websites",
			"about",
			"contact"
		];

		if($routeParams.view){
			$scope.currentView  = $routeParams.view
		} else {
			$scope.currentView  = "home"
		}

		if($routeParams.single){
			$scope.singleView = true;
			$scope.single = $routeParams.single;
		}

		$scope.toggleDialogue = function(){
			$scope.showDialogue = !$scope.showDialogue;
		};

		$scope.publish = function(){
			var data = angular.copy($scope.json);
			$scope.showDialogue = false;
			api.post("update",data);
		};

		$scope.switchView = function (index) {
			$scope.currentView = $scope.views[index];
			$scope.page = $scope.json[$scope.currentView];
		};

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
		};

	}]);