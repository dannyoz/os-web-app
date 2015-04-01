dod.factory('api', ['$http', function ($http){

	var prefix = '/api/',
		suffix ='.json';

	
	var getContent = function(name){

		var url = prefix+name+suffix;
		return $http.get(url);

	}, 
	postMessage = function(msg){

		var url = "/post-message";

		return $http.post(url,msg);

	}

	return {
		getContent : getContent,
		postMessage : postMessage
	}

}]);