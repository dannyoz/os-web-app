dod.directive('dodScroll', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, elm, attrs) {

            $rootScope.$on('scrolling',function(){
                applyStyles();
            });

            function applyStyles(){

                var wHalf   = window.innerHeight / 1.5,
                    rect    = elm[0].getBoundingClientRect(),
                    bottom  = rect.top + rect.height,
                    top     = rect.top,
                    trigger = top - wHalf;

                if(trigger < 0 && bottom > 0){
                    elm.removeClass("hidden");
                }

                else if(bottom < 70){
                    elm.addClass("hidden");
                }

                else if(trigger > 0){
                    elm.addClass("hidden");
                }
            }

            applyStyles();
        }
    };
}]);