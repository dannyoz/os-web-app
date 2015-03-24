app.factory('api',['$http', '$q', function ($http, $q){

	var endpoints = {
		"devapi"  : "http://localhost:3000/api/data.json?callback=JSON_CALLBACK",
		"devpost" : "http://localhost:3000/test/"
	};

	var get = function(){

		var defer = $q.defer();

		$http.jsonp(endpoints.devapi).success(function (result){
			defer.resolve(result);
		}).error(function (data, status, headers, config){
			console.log("Get error : " , data);
			console.log("status : " , status);
			console.log("headers : " , headers);
			console.log("config : " , config);
		});

		return defer.promise
	},

	post = function(data){


		$http.post(endpoints.devpost,data).success(function (result){
			console.log("Post success : " , result.status);
		}).error(function (data, status, headers, config){
			console.log("Post error : " , data);
			console.log("status : " , status);
			console.log("headers : " , headers);
			console.log("config : " , config);
		});;
	};

	return {
		get : get,
		post : post
	}

}]);