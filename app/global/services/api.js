dod.factory('api', ['$http', '$q', function ($http, $q){

	var endpoints = {
		home : '/api/main.json'
	};
	
	var getHomePage = function(){

		var defer = $q.defer();

		$http.jsonp(endpoints.home+"?callback=JSON_CALLBACK").success(function (result){
			defer.resolve(result);
		}).error(function (result){
			console.log('error', result);
		});

		return defer.promise
	};


	return {
		getHomePage : getHomePage
	}

}]);