cms.directive('cmsPagination', function(){
	return {
		restrict:"A",
		scope : {
			array : "=cmsPagination"
		},
		templateUrl : 'cms/app/global/directives/cms-pagination.html',
		link : function(scope,element,attrs){

			scope.method = attrs.function;
            scope.currentPage = 0;

            scope.pagify = function(){

    			scope.pages = [];

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

            };

            scope.pagify();

            scope.$on('imageAdded', function (){
                scope.pagify();
            });

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