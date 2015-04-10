var cms = angular.module('cms', ['ngRoute','ngSanitize']);


cms.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: 'app/views/splash/splash.html',
            controller : 'splash'
        })

        .when('/editor', {
            templateUrl: 'app/views/editor/editor.html',
            controller : 'editor'
        })

        .when('/styleguide', {
        	templateUrl: 'app/views/styleguide/base.html'
    	});
        

	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
}]);