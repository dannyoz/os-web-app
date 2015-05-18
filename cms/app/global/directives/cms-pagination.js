cms.directive('cmsPagination', function(){
	return {
		restrict:"A",
		scope : {
			array : "=cmsPagination"
		},
		templateUrl : 'cms/app/global/directives/cms-pagination.html',
		link : function(scope,element,attrs){

			scope.method = attrs.function;
			scope.pages = [];
			scope.currentPage = 0;

			// Adding delete index
			for (i=0; i<scope.array.length; i++) {
                scope.array[i].deleteIndex = i;
            };

            // Page-ify
			var i,j,page,chunk = 20;
            for (i=0; i<scope.array.length; i+=chunk) {
                page = scope.array.slice(i,i+chunk);
                scope.pages.push(page);
            };

            // Emit delete function to editor-controller.js
            scope.deleteImage = function(path,index){
            	var image = {"path" : path, "index" : index}; 
            	scope.$emit('delete',image);
            };

            scope.selectMedia = function(path){
            	scope.$emit('select',path);
            };

            scope.switchPage = function(i){
            	scope.currentPage = i;
            };
		}
	}
});