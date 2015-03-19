//Loading content
dod.run([
    '$rootScope',
    '$timeout',
    'content',
    'api', 
    function ($rootScope, $timeout, content, api){

    console.log('request made to api');

    api.getContent('data').then(function (result){

        $timeout(function(){

            content.data  = result;
            content.ready = true;

            $rootScope.$broadcast('appReady', result);

        },1000);
        
    });

}]);