(function(){

    angular.module('catalogApp')
        .factory('pollRequestedPage', function($http, $timeout, $q){


            var leastWaitTime = 5000;
            var mostWaitTime = 30000;


            return {
                checkSite : checkSite,
                startPolling : startPolling
            };

            function checkSite(howlong){
                return $q(function(resolve, reject, notify) {
                    var request = new XMLHttpRequest();
                    var url = 'http://localhost:8080/proxy/numeproducts.com/ssss';
                    request.open("GET", url, true);
                    request.onload = onload;
                    request.onerror = onerror;
                    request.onprogress = onprogress;
                    request.send();

                    function onload() {
                        if (request.status === 200) {
                            console.log('The page onload!' + request);
                            resolve(request.responseText);
                        } else {
                            intervalFunction(howlong);
                            console.log('Waited ' + howlong + ' before last request. ' + request.status);
                           // reject(new Error("Status code was " + request.status));
                        }
                    }

                    function onerror() {
                       // reject(new Error("Can't XHR " + JSON.stringify(url)));
                        console.log("Can't XHR " + JSON.stringify(url));
                    }

                    function onprogress(event) {
                        //notify(event.loaded / event.total);
                        console.log('The page onprogress! ' + event);
                    }
                });

                //THIS WAY SEEMS WAY SIMPLER
                //$http.get('http://localhost:8080/proxy/numeproducts.com/dddd')
                //    .then(function(data) {
                //        console.log('The product they are viewing is live again, send user message with redirect warning');
                //        window.alert('the page you are looking for on nume is back, redirect countdown in modal');
                //        // don't run the intervalFunction again since we know the site is back
                //    }, function(data){
                //        console.log('The product they are viewing is still not returning a 400, do nothing');
                //        console.log('Wait to check again: ' + howlong);
                //        intervalFunction(howlong);
                //    });

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