var dod = angular.module('dod', ['ngRoute','ngSanitize']);

dod.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: 'app/views/home/home.html',
                controller : 'home'
        })

        .when('/about', {
                templateUrl: 'app/views/about/about.html',
                controller : 'about'
        })

        .when('/art', {
                templateUrl: 'app/views/art/art.html',
                controller : 'art'
        })

        .when('/art/:artwork', {
                templateUrl: 'app/views/art/single/art-single.html',
                controller : 'artSingle'
        })

        .when('/contact', {
                templateUrl: 'app/views/contact/contact.html',
                controller : 'contact'
        })

        .when('/websites', {
                templateUrl: 'app/views/websites/websites.html',
                controller : 'websites'
        })

        .when('/websites/:website', {
                templateUrl: 'app/views/websites/single/website-single.html',
                controller : 'websiteSingle'
        })

        .when('/styleguide', {
        	templateUrl: 'app/views/styleguide/styleguide.html'
        })

        .otherwise({
                templateUrl: 'app/views/404/404.html',
                controller : 'home'
        });

        
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});

}]);

