 dod.directive('dodPerspective', function(){
 	return {
 		restrict: "A",
 		scope : {
 			position : "=dodPerspective"
 		},
 		link : function(scope){

 			var $window = angular.element(window);
 			$window.bind('mousemove',function (e){

 				var xpos   = e.pageX,
					ypos   = e.pageY,
					width  = e.view.outerWidth,
					height = e.view.outerHeight,
					xmid   = width/2,
					ymid   = height/2;

				var xval,yval;

				if(xpos < xmid){
					xval = "-" + (xmid - xpos)/xmid*100;
				} else {
					xval = Math.abs((xmid - xpos)/xmid*100);
				}

				if(ypos < ymid){
					yval = (ymid - ypos)/ymid*100;
				} else {
					yval = "-" +  Math.abs((ymid - ypos)/ymid*100);
				}

				scope.$apply(function() {
				    scope.position.xval = xval;
				    scope.position.yval = yval;
				});

 			});
 		}
 	}
 });