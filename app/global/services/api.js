dod.factory('api', ['$http', '$q', function ($http, $q){

	var prefix = '/api/',
		suffix ='.json?callback=JSON_CALLBACK';

	
	var getContent = function(name){

		var defer = $q.defer(),
			url   = prefix+name+suffix;

		$http.jsonp(url).success(function (result){
			defer.resolve(result);
		});

		return defer.promise
	};

	return {
		getContent : getContent
	}

}]);