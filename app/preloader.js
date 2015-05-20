//Loading content
dod.run([
    '$rootScope',
    '$http',
    '$timeout',
    'content',
    'api', 
    function ($rootScope, $http, $timeout, content, api){

        //console.log('request made to api');
        $rootScope.$broadcast('loadingMsg', "Loading...");

        api.getContent('data').success(function (result){

            loadImages(result.images, result)
            
        });

        function loadImages(images,result) {

            $rootScope.$broadcast('loadingMsg', "Loading Media...");

            var totalReq = 0,
                remaining = 0;

            angular.forEach(images,function (img){
                if (img.preload) {
                    totalReq ++
                    get(img.path);
                };
            });

            function get(url){

                $http.get(url).success(function (data){

                    remaining ++
                    new Image().src = url

                    var count = {
                        "total" : totalReq,
                        "remaining" :remaining
                    }   

                    $rootScope.$broadcast('remaining', count);

                    if(totalReq == remaining){

                        $timeout(function(){

                            content.data  = result;
                            content.ready = true;

                            $rootScope.$broadcast('appReady', result);

                        },500);
                    }
                });
            }
        }

    }]);