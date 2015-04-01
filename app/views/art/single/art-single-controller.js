dod.controller('artSingle',[
	'$scope',
	'$location',
	'content', 
	function ($scope, $location, content) {
		"use strict";
		
		var pathname = location.pathname,
			work     = pathname.replace("/art/", "");

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

	}]);