dod.run([
    '$rootScope',
    '$location',
    '$timeout',
    function ($rootScope, $location, $timeout){

        $rootScope.routeClass = "enter"
        $timeout(function(){
            $rootScope.routeClass = "";
        },1000);

        $rootScope.changeRoute  = function(route,dur,leave,enter){

            var leaveclass = (leave) ? leave : "leave",
                enterclass = (enter) ? enter : "enter",
                duration   = (dur) ? dur : 1000;

            $rootScope.routeClass = leaveclass

            $timeout(function(){
                $location.path(route);
                $rootScope.routeClass = enterclass;
                $timeout(function(){
                    $rootScope.routeClass = "";
                },duration);
            },duration);
        };

    }]);