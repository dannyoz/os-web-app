cms.directive('cmsDragable',['$rootScope',function ($rootScope){
	return{
		restrict: "A",
		scope :{
			config : "=cmsDragable" 
		},
		link : function(scope,element,attrs){

			element.attr("draggable", "true");

			element.on('dragover', function (event){
				event.preventDefault();
				element.parent().addClass('dragover');
			});

			element.on('dragleave', function (event){
				element.parent().removeClass('dragover');
			});

			element.on('dragend', function (event){
				element.parent().removeClass('dragover dragging');
			});

			element.on('dragstart',function (event){
				$rootScope.tempIndex = scope.config.index;
				element.parent().addClass('dragging');
			});

			element.on('drop',function (event){

				var newIndex = $rootScope.tempIndex
					newItem  = scope.config.list[newIndex],
					oldItem  = scope.config.list[scope.config.index];

				scope.$apply(function(){
					scope.config.list.splice(scope.config.index,1,newItem);
					scope.config.list.splice(newIndex,1,oldItem);
				});

				element.parent().removeClass('dragover');
			});
		}
	}
}]);