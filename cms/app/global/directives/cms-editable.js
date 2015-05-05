cms.directive('cmsEditable', function(){
	return{
		restrict : "A",
		templateUrl : 'cms/app/global/directives/cms-editable.html',
		scope : {
			content : "=cmsEditable" 
		},
		link : function(scope, element, attrs){

			scope.editMode = false;
			scope.type     = attrs.type;

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
		}
	}
});