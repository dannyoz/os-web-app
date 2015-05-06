cms.directive('cmsEditable', function(){
	return{
		restrict : "A",
		templateUrl : 'cms/app/global/directives/cms-editable.html',
		scope : {
			content : "=cmsEditable" 
		},
		link : function(scope, element, attrs){

			if(attrs.dateType){
				scope.type = attrs.dateType;
				scope.current = 0;
			} else {
				scope.type = "text";
			}

			scope.editMode = false;
			scope.toggleEdit = function(){

				if(!scope.editMode){
					scope.editMode = true
				} else{
					scope.editMode = false
				}
			}

			scope.save = function(content){

				scope.toggleEdit();
				scope.content = content
			}

			scope.removeListItem = function(i){
				scope.content.splice(i,1);
			}
		}
	}
});