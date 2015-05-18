var cms = angular.module('cms', ['ngRoute','ngSanitize','textAngular', 'ngFileUpload']);


cms.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
 	
 	$routeProvider

        .when('/', {
        	templateUrl: 'cms/app/views/splash/splash.html',
            controller : 'splash'
        })

        .when('/editor', {
            templateUrl: 'cms/app/views/editor/editor.html',
            controller : 'editor'
        })

        .when('/editor/:view', {
            templateUrl: 'cms/app/views/editor/editor.html',
            controller : 'editor'
        })

        .when('/editor/:view/:single', {
            templateUrl: 'cms/app/views/editor/editor.html',
            controller : 'editor'
        })

        .when('/messages',{
            templateUrl: 'cms/app/views/messages/messages.html',
            controller : 'messages'
        })

        .when('/styleguide', {
        	templateUrl: 'cms/app/views/styleguide/base.html'
    	});
        

	$locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
}]);

cms.filter('orderObjectBy', function() {
    return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item) {
            filtered.push(item);
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? 1 : -1);
        });
        return filtered;
    };
});
