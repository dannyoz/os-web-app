var ngApp = angular.module('app', ['ngRoute']);

ngApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider
        .when('/', {
        	templateUrl: '/views/home.html'
        })

        .when('/styleguide', {
        	templateUrl: '/views/styleguide.html'
        });
        
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);