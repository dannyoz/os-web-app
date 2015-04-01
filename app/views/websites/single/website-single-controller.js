dod.controller('websiteSingle',[
	'$scope',
	'$location', 
	'content', 
	function ($scope, $location, content) {
		"use strict";

		var pathname = location.pathname,
			website  = pathname.replace("/websites/", "");

		//Use cached data if request is already made
		if(content.ready){	
			$scope.site  = content.data.websites.list[website];
			$scope.ready = content.ready;

			if(!$scope.site){
				$location.path('/404');
			}
		}

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.site  = content.data.websites.list[website];
			$scope.ready = content.ready;

			if(!$scope.site){
				$location.path('/404');
			}
		});


	}]);