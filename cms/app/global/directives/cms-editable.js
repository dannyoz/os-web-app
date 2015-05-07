cms.directive('cmsEditable', function(){
	return{
		restrict : "A",
		templateUrl : 'cms/app/global/directives/cms-editable.html',
		scope : {
			content : "=cmsEditable" 
		},
		link : function(scope, element, attrs){

			if(attrs.type){
				scope.type = attrs.type;
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

			scope.selectListItem = function(i){
				scope.currentList = i;
			}

			scope.changeListItem = function(i,text){
				scope.content[i] = text;
				scope.currentList = null;
			}

			scope.addListItem = function(){
				scope.content.push("List item");
				scope.currentList = (scope.content.length-1);
			}
		}
	}
});