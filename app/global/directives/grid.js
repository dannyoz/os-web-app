dod.directive('dodGrid', function(){
	return{
		restrict : "A",
		scope : {
			list : "=dodGrid"
		},
		link:function(scope,element,attrs){

			var columns = 12,
				padding = "2%";
			
			scope.count = 0;

			angular.forEach(scope.list, function(){
				scope.count ++
			})

			console.log(scope.count);
		}
	}
});