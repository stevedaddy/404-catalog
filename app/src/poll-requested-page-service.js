(function(){
    angular.module('catalogApp')
        .factory('pollRequestedPage', function($http, $timeout, $q, $rootScope){
//console.log($rootScope.howLong);
            var leastWaitTime = 10000;
            $rootScope.howLong = $rootScope.howLong || leastWaitTime;

            return {
                checkSite : checkSite,
                startPolling : startPolling
            };

            function checkSite(howlong){
                //THIS WAY SEEMS WAY SIMPLER

                $http.get('http://localhost:8080/proxy/numeproducts.com/dddd')
                    .then(function(data) {
                    //    console.log('The product they are viewing is live again, send user message with redirect warning');
                       // window.alert('the page you are looking for on nume is back, redirect countdown in modal');
                        // don't run the intervalFunction again since we know the site is back
                    }, function(data){
                   //     console.log('The product they are viewing is still not returning a 400, do nothing');
                        $rootScope.$emit('howLong', howlong);
                      //  console.log('Wait to check again: ' + howlong);
                      //  $rootScope.howLong = howlong;
                      //  console.log($rootScope.howLong);
                        intervalFunction(howlong);
                    });
            }

            function intervalFunction (howlong){
                $timeout(function() {
                }, howlong).then(function() {
                    if (howlong < 600000){
                        howlong = howlong * 2;
                    }
                    checkSite(howlong);
                });
            }

            function startPolling(waitTime){
                intervalFunction(waitTime);
            }
        });
}())