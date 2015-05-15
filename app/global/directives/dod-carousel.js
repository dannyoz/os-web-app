dod.directive('dodCarousel',['$timeout', function ($timeout){
	return{
		restrict: "A",
		templateUrl : 'app/global/directives/dod-carousel.html',
		scope : {
			images : '=dodCarousel'
		},
		link : function(scope,element,attrs){

			var isSwipe  = false,
				distance = 0,
				touch = {
					start : {},
					end : {}
				};

			scope.currentSlide = 0;
			scope.nextSlide    = 1;
			scope.duration     = 600;

			scope.selectSlide = function(i,dir){

				if(i != scope.currentSlide && i >= 0 && i < scope.images.length){
					scope.nextSlide = i;
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

				} else {

					scope.direction = "wibble"
					$timeout(function(){
						scope.direction = "";
					},scope.duration);
				}

			};


			element.on('touchstart', function (e){
				touch.start.X = e.touches[0].pageX;
			});

			element.on('touchmove', function (e){
				distance ++
				touch.end.X = e.touches[0].pageX;
			});

			element.on('touchend', function (e){

				var Xdiff = Math.abs(touch.end.X - touch.start.X),
			 		direction = "";

				//horizontal
				if(touch.start.X > touch.end.X){
					scope.selectSlide(1);
				} else{
					scope.selectSlide(0);
				}

				//Resets
				distance = 0;
				touch    = {
					start : {},
					end : {}
				};

			});

			scope.slideClass = function(i){
				if(i==scope.currentSlide) return "active"
				if(i==scope.nextSlide) return "next"	
			};
		}
	}
}]);