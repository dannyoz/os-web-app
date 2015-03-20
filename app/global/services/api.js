dod.factory('api', ['$http', function ($http){

	var prefix = '/api/',
		suffix ='.json?callback=JSON_CALLBACK';

	
	var getContent = function(name){

		var url = prefix+name+suffix;
		return $http.jsonp(url);

	};

	return {
		getContent : getContent
	}

}]);