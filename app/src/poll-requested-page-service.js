(function(){
    angular.module('catalogApp')
        .factory('pollForRequestedPage', function($http, $timeout){
            return {
                checkSite : checkSite,
                startPolling : startPolling
            };

            function checkSite(howlong){
                //  $http.get('http://localhost:8080/proxy/numeproducts.com/hair-styling/hot-tools/curling-wand/octowand-curling-iron-set/')
                $http.get('http://localhost:8080/proxy/numeproducts.com/dddd')
                    .success(function(data, status, headers, config) {
                        console.log('The product they are viewing is live again, send user message with redirect warning');
                        window.alert('the page you are looking for on nume is back, redirect countdown in modal');
                        // don't run the intervalFunction again since we know the site is back
                    })
                    .error(function(data, status, headers, config){
                        console.log('The product they are viewing is still not returning a 400, do nothing');
                        console.log('Wait to check again: ' + howlong);
                        intervalFunction(howlong);
                    })
            }

            function intervalFunction (howlong){
                $timeout(function() {
                    // DON'T NEED TO DO ANYTHING HERE??
                    // PROBABLY WILL NEED TO CHECK HERE TOO ONCE THIS IS WORKING FOR REAL
                }, howlong).then(function() {
                    // You know the timeout is done here
                    if (howlong < 160000){
                        howlong = howlong + howlong;
                    }
                    checkSite(howlong);
                });
            }

            function startPolling(waitTime){
                // interval logic
                //start with waiting as long as the app requests for first check
                // to see if nume page is available and double the amount of time
                // to wait to check again each time it checks
                // up to 16 seconds, then it just checks every 16 seconds
                defaultFirstCheckTime = 2500;
                if (waitTime == undefined){
                    var waitTime = defaultFirstCheckTime;
                }
                howlong = waitTime;
                checkSite(howlong);
            }
        });






}())