(function(){

    angular.module('catalogApp')
        .factory('pollRequestedPage', function($http, $timeout, $q){


            var leastWaitTime = 5000;


            return {
                checkSite : checkSite,
                startPolling : startPolling
            };

            function checkSite(howlong){
                //THIS WAY SEEMS WAY SIMPLER
                $http.get('http://localhost:8080/proxy/numeproducts.com/dddd')
                    .then(function(data) {
                        console.log('The product they are viewing is live again, send user message with redirect warning');
                        window.alert('the page you are looking for on nume is back, redirect countdown in modal');
                        // don't run the intervalFunction again since we know the site is back
                    }, function(data){
                        console.log('The product they are viewing is still not returning a 400, do nothing');
                        console.log('Wait to check again: ' + howlong);
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
                //devide by two for the first time these are submitted to interval function, which doubles all values
                leastWaitTime = leastWaitTime / 2;
                waitTimeThis = waitTime / 2;
                thisWaitTime = waitTimeThis || leastWaitTime;
                intervalFunction(thisWaitTime);
            }
        });
}())