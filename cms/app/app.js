var app = angular.module('app', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: 'app/views/publish/publish.html',
            controller : 'publish'
        })

        .when('/styleguide', {
        	templateUrl: 'app/views/styleguide/base.html'
    	});
        

	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
}]);