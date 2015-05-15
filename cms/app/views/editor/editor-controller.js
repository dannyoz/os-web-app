cms.controller('editor',[
	'$scope',
	'$location',
	'$routeParams',
	'$sce',
	'Upload',
	'api',
	'data', 
	function ($scope, $location, $routeParams, $sce, Upload, api, data){
		"use strict";

		if(!$scope.json){
			
			api.get().then(function (result){
				$scope.json = result;
				$scope.page = $scope.json[$scope.currentView];
				$scope.ready = true;
			});

		} else {

			$scope.json = data.json
			$scope.page = $scope.json[$scope.currentView];
			$scope.ready = true;
		}

		$scope.previewMode  = false;
		$scope.showDialogue = false;
		$scope.singleView   = false;
		$scope.mediaPopup   = false;

		$scope.views = [
			"home",
			"art",
			"websites",
			"about",
			"contact",
			"media"
		];

		if($routeParams.view){
			$scope.currentView  = $routeParams.view
		} else {
			$scope.currentView  = "home"
		}

		if($routeParams.single){
			$scope.singleView = true;
			$scope.single = $routeParams.single;
		}

		$scope.toggleDialogue = function(){
			$scope.showDialogue = !$scope.showDialogue;
		};

		$scope.publish = function(){
			var data = angular.copy($scope.json);
			$scope.showDialogue = false;
			api.post("update",data);
		};

		$scope.switchView = function (index) {
			$scope.currentView = $scope.views[index];
			$scope.page = $scope.json[$scope.currentView];
		};

		$scope.addWebsite = function(){

			$scope.showAddWeb = true;
			$scope.newwebsite = "Website Name goes here";

			$scope.confirmWebsite = function(name){

				var key = name.replace(/ /g, "-").toLowerCase(),
					obj = {
						title : name,
						display : "tablet",
						info : "<p>Write something about me...</p>",
						tags: [
							"HTML5",
							"jQuery",
							"Sass"
						],
						carousel: [
							"/img/placeholder.jpg",
							"/img/placeholder.jpg",
							"/img/placeholder.jpg"
						],
						url : "http://www.google.com"
					};

				$scope.json.websites.list[key] = obj;
				$scope.publish();
				$location.path("/editor/websites/" + key);
			};

		};

		$scope.addArtwork = function(){

			$scope.showAddArt = true;
			$scope.newartwork = "Work name goes here";

			$scope.confirmArtwork = function(name){

				var key = name.replace(/ /g, "-").toLowerCase(),
					obj = {
						title: "Work title",
						info: "<p>Description</p>",
						media: {
							"thumbnail" : "/img/placeholder.jpg",
							"main-image": "/img/placeholder.jpg"
						}
					};

				$scope.json.art.list[key] = obj;
				$scope.publish();
				$location.path("/editor/art/" + key);
			};

		};

		$scope.upload = function (files) {

	        if (files && files.length) {
	            for (var i = 0; i < files.length; i++) {
	                var file = files[i];
	                Upload.upload({
	                    url: 'http://localhost:3000/user/uploads',
	                    fields: {'username': $scope.username},
	                    file: file
	                }).progress(function (evt) {
	                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
	                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
	                }).success(function (data) {
	                    var obj = {
	                    	title   : data.title,
	                    	path    : data.path,
	                    	preload : false
	                    };
	                    $scope.json.images.push(obj);
	                    $scope.publish();
	                });
	            }
	        }
	    };

	    $scope.deleteImage = function(filePath,i){
	    	var dataObj = {path : filePath, index : i};
	    	api.deleteImg(dataObj).success(function (data){
	    		$scope.json.images.splice(data.index,1);
	    		$scope.publish();
	    	});
	    };

	    $scope.removeFromList = function(key,item){
	    	delete $scope.json[key].list[item];
	    };

	    $scope.showMedia = function(view,work,media){

	    	console.log(view,work,media);
	    	$scope.mediaPopup = true;

	    	$scope.selectMedia = function(path){
		    	$scope.json[view].list[work].media[media] = path;
		    	$scope.mediaPopup = false;
		    };
	    };

	    
		$scope.iconClass = function(view){

			var className;

			if(view == "home"){
				className = "icon-shop";
			}

			if(view == "art"){
				className = "icon-pen";
			}

			if(view == "websites"){
				className = "icon-display";
			}

			if(view == "about"){
				className = "icon-study";
			}

			if(view == "contact"){
				className = "icon-bubble";
			}

			if(view == "media"){
				className = "icon-photo";
			}

			return className;
		};

	}]);