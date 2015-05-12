dod.directive('dodCarousel',['$timeout', function ($timeout){
	return{
		restrict: "A",
		templateUrl : 'app/global/directives/dod-carousel.html',
		scope : {
			images : '=dodCarousel'
		},
		link : function(scope,element,attrs){

			scope.currentSlide = 0;
			scope.nextSlide    = 1;
			scope.duration     = 500;

			scope.selectSlide = function(i,dir){
				scope.nextSlide = i
				if(i>scope.currentSlide){
					scope.direction = "right";
				}else{
					scope.direction = "left";
				}

				$timeout(function(){
					scope.direction = "";
					scope.currentSlide = i;
					scope.nextSlide    = 1;
				},scope.duration);
			};

			scope.slideClass = function(i){
				if(i==scope.currentSlide) return "active"
				if(i==scope.nextSlide) return "next"	
			}
		}
	}
}]);