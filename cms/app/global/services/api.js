cms.factory('api',['$http', '$q', function ($http, $q){

	var endpoints = {
		"devapi"     : "http://localhost:3000/api/data.json",
		"devpost"    : "http://localhost:3000/update/",
		"devmsg"     : "http://localhost:3000/api/messages.json",
		"devmsgPost" : "http://localhost:3000/post-message/",
		"delteteImg" : "http://localhost:3000/user/uploads/delete"
	};

	var get = function(){

		var defer = $q.defer();

		$http.get(endpoints.devapi).success(function (result){
			defer.resolve(result);
			
		}).error(function (data, status, headers, config){
			console.log("Get error : " , data);
			console.log("status : " , status);
			console.log("headers : " , headers);
			console.log("config : " , config);
		});

		return defer.promise
	},

	post = function(method,data){

		if(method == "update"){
			var endpoint = endpoints.devpost
		}

		if(method == "messages"){
			var endpoint = endpoints.devmsgPost
		}

		$http.post(endpoint,data).success(function (result){
			console.log("Post success : " , result.status);
		}).error(function (data, status, headers, config){
			console.log("Post error : " , data);
			console.log("status : " , status);
			console.log("headers : " , headers);
			console.log("config : " , config);
		});
	},

	msg = function(){

		var defer = $q.defer();

		$http.get(endpoints.devmsg).success(function (result){
			defer.resolve(result);
			
		}).error(function (data, status, headers, config){
			console.log("Get error : " , data);
			console.log("status : " , status);
			console.log("headers : " , headers);
			console.log("config : " , config);
		});

		return defer.promise
	},

	deleteImg = function(fileData){
		return $http.post(endpoints.delteteImg, fileData);
	}

	return {
		get : get,
		post : post,
		msg  : msg,
		deleteImg :deleteImg
	}

}]);