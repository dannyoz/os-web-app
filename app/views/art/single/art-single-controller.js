dod.controller('artSingle',[
	'$scope',
	'$location',
	'$routeParams',
	'content', 
	function ($scope, $location, $routeParams, content) {
		"use strict";
		
		var work = $routeParams.artwork;

		//Use cached data if request is already made
		if(content.ready){	
			$scope.work  = content.data.art.list[work];
			$scope.ready = content.ready;

			if(!$scope.work){
				$location.path('/404');
			}
		}

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.work  = content.data.art.list[work];
			$scope.ready = content.ready;

			if(!$scope.work){
				$location.path('/404');
			}
		});

		$scope.getMainImage = function(){
			var width  = window.innerWidth,
				height = window.innerHeight;

			if(width <= height) return $scope.work.media.portrait;
			if(width > height) return $scope.work.media.landscape;
		};

	}]);