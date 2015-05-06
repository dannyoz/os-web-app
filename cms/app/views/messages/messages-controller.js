cms.controller('messages',[
	'$scope',
	'$sce',
	'api',
	function ($scope,$sce,api){

		$scope.currentmsg = 0;
		$scope.delete = false;
		
		api.msg().then(function (data){
			$scope.messages   = data.messages;
		});

		$scope.parseDate = function(d){

			var date     = new Date(d),
				day      = date.getDate(),
				months   = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
				m        = date.getMonth(),
				year     = date.getFullYear(),
				niceDate = months[m]+ " " + day + " " + year;

			return niceDate;
		}

		$scope.switchMsg = function(i){
			$scope.currentmsg = i;
		};

		$scope.toggleDelete = function(){
			$scope.delete = !$scope.delete;
		};

		$scope.deleteMsg = function(i){

			$scope.delete = false;
			$scope.messages.splice(i,1);

			if($scope.currentmsg > ($scope.messages.length -1)){
				$scope.currentmsg -- 
			}

			var copy  = angular.copy($scope.messages),
				json  = JSON.stringify(copy);

			api.post("messages",json);

		};

	}]);