cms.controller('publish',['$scope','api',function ($scope,api){
	$scope.data = "data goes here";
	$scope.api = api;

	$scope.getData = function(){

		api.get().then(function (result){
			console.log('data recived : ', result);
			$scope.data = JSON.stringify(result);
		});
	};

}]);