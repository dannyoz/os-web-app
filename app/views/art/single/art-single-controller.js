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
			$scope.sequence = content.data.art.sequence;
			$scope.list     = content.data.art.list;	
			$scope.work     = content.data.art.list[work];
			$scope.ready    = content.ready;
			$scope.artIndex = $scope.sequence.indexOf(work);

			if(!$scope.work){
				$location.path('/404');
			}
		}

		//Use event listener for initial api request
		$scope.$on('appReady', function (data){
			$scope.sequence = content.data.art.sequence;
			$scope.list     = content.data.art.list;
			$scope.work     = content.data.art.list[work];
			$scope.ready    = content.ready;
			$scope.artIndex = $scope.sequence.indexOf(work);

			if(!$scope.work){
				$location.path('/404');
			}
		});

		$scope.getArtwork = function(index){
			var thisObj = $scope.list[$scope.sequence[index]];
			return thisObj
		};

		$scope.getMainImage = function(index){
			var width  = window.innerWidth,
				height = window.innerHeight;

			if(!index){
				if(width <= height) return $scope.work.media.portrait;
				if(width > height) return $scope.work.media.landscape;
			} else {
				if(width <= height) return $scope.list[$scope.sequence[index]].media.portrait;
				if(width > height) return $scope.list[$scope.sequence[index]].media.landscape;
			}
		};


	}]);