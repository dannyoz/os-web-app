dod.controller('navigation',[
	'$scope',
	'$location', 
	'$timeout',
	'content', 
	function ($scope, $location, $timeout, content) {
		"use strict";

		//Use cached data if request is already made
		if(content.ready){	
			$scope.nav     = content.data.navigation;
			$scope.ready   = content.ready;
		}
		
		$scope.showNav = false;
		$scope.openNav = false;

		$scope.$on("$routeChangeSuccess", function(){
			$scope.path = $location.$$path;
		});

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.nav   = content.data.navigation;
			$scope.ready = content.ready;
		});

		$scope.toggleNav = function(){

			if(!$scope.showNav){
				$scope.showNav = true;
				$scope.openNav = true;
			}

			else {

				$scope.hideNav();
			}
			
		}

		$scope.hideNav = function(){

			$scope.openNav = false

			$timeout(function(){
				$scope.showNav = false
			},500);
		}

	}]);