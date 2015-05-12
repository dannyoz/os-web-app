cms.directive('cmsSquare', function(){
	return{
		restrict : "A",
		link : function(scope, element, attrs){
			var width = element[0].getBoundingClientRect().width,
				round = Math.round(width);
			element.css({"height" : round+"px"});
		}
	}
});