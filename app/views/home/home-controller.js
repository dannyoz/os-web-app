dod.controller('home',['$scope', 'content', function ($scope, content) {
	"use strict";

	//Use cached data if request is already made
	if(content.ready){	
		$scope.page  = content.data.home;
		$scope.ready = content.ready;
	}

	//Use event listener for initial api request
	$scope.$on('appReady', function (data){
		$scope.page  = content.data.home;
		$scope.ready = content.ready;
	});

	// Perspective effects
    $scope.position = {
        xval: 0,
        yval: 0
    };

    $scope.perspective = function (amount,axis) {

    	var base = 90*amount,
    		result = $scope.position.xval;


   //      var type = (!method) ? "attract" : method,
			// styles;

   //      if (type == "attract") {

   //          styles = "left:" + (Math.round($scope.position.xval * ammount)) + "px;" +
			// 		 	 "top:" + (Math.round($scope.position.yval * ammount)) + "px";
   //      } else {

   //          styles = "right:" + (Math.round($scope.position.xval * ammount)) + "px;" +
			// 		 	 "bottom:" + (Math.round($scope.position.yval * ammount)) + "px";
   //      }

        return result;
    };

}]);