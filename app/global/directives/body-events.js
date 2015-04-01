dod.directive('dodEvents', function(){
	return {
		restrict : "A",
		link : function(scope, element, attrs){

			var $window  = angular.element(window),
				isSwipe  = false,
				distance = 0,
				touch    = {
					start : {},
					end : {}
				};


			$window.on('touchstart', function (e){
				//console.log(e);
				touch.start.X = e.touches[0].pageX;
				touch.start.Y = e.touches[0].pageY;
			});

			$window.on('touchmove', function (e){
				distance ++
				touch.end.X = e.touches[0].pageX;
				touch.end.Y = e.touches[0].pageY;
			});

			$window.on('touchend', function (e){

				//console.log(touch.end,touch.start, distance)

				var Xdiff = Math.abs(touch.end.X - touch.start.X),
			 		Ydiff = Math.abs(touch.end.Y - touch.start.Y),
			 		direction = "";

			 	//Detect axis
				if(Xdiff > Ydiff){
					//horizontal
					if(touch.start.X > touch.end.X){
						direction = "right";
					} else{
						direction = "left";
					}

				} else {
					//vertical
					if(touch.start.Y > touch.end.Y){
						direction = "down";
					} else{
						direction = "up";
					}
				}

				if(distance > 1){
					console.log(direction);
				} else {
					console.log("click");
				}

				//Resets
				distance = 0;
				touch    = {
					start : {},
					end : {}
				};


			});
		}
	}
});