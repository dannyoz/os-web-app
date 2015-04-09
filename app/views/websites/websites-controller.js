dod.controller('websites',[
	'$scope',
	'$sce',
	'$location', 
	'content', 
	function ($scope, $sce, $location, content) {
		"use strict";
		
		//Use cached data if request is already made
		if(content.ready){	
			$scope.page  = content.data.websites;
			$scope.ready = content.ready;
		}

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.page  = content.data.websites;
			$scope.ready = content.ready;
		});

		$scope.showSite = function(path){
			$location.path('/websites/' + path);
		};

	}]);