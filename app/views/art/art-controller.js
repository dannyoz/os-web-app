dod.controller('art',[
	'$scope',
	'$location',  
	'content', 
	function ($scope, $location, content) {
		"use strict";
		
		//Use cached data if request is already made
		if(content.ready){	
			$scope.page   = content.data.art;
			$scope.images = content.data.images;
			$scope.ready  = content.ready;
		}

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.page   = content.data.art;
			$scope.images = content.data.images;
			$scope.ready  = content.ready;
		});

		$scope.showWork = function(path){
			$location.path('/art/' + path);
		};

		$scope.getThumb = function(index){
			return $scope.images[index].path;
		}

	}]);