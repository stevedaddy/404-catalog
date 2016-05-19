(function(){
    angular.module('catalogApp')

        .factory('products', function(){
            return {
                importProducts : importProducts,
                startPolling : startPolling
            };


            function importProducts(){
               // do some http request

                var reqParams = {
                    type: 'JSON'
                };

                return $http.get('./resources/catalog.json', {cache: true})
                    .then(function (response) {
                        //if there's a cached version saved in api2 don't load a new one when the state is loaded
                        var cache;
                        if(!cache) {
                            cache = $q.when(response.data);
                            // console.log(JSON.stringify(response.data));
                        }
                        return cache;
                    });
            }



            function startPolling(){
                // interval logic
                //function chopUrl(fullUrl){
                //    return   fullUrl = fullUrl.replace(/https?:\/\/[^\/]+/i, ""); // Remove domain from beginning of URL
                //    //return fullUrl.replace(/\/$/, ''); // Remove forward slash / at the end of the URL ($)
                //}
                //function splitUrl(partUrl){
                //    var s = partUrl.replace(/\/$/, '');
                //    var s = s.replace(/\/*/, '');
                //    var s =  s.replace(/\//g, '-');
                //    return s;
                //}
                //function urlArray(urls){
                //    $scope.validUrls = new Array();
                //    $scope.validUrls.push(urls);
                //    // console.log($scope.validUrls.toString());
                //}
                //angular.forEach($scope.importproducts.Categories, function(value, key){
                //    var urlPartSave = chopUrl(value.CategoryUrl);
                //    var urlPart = chopUrl(value.CategoryUrl);
                //    var urlPart =  splitUrl(urlPart);
                //    urlArray(urlPart);
                //    console.log(urlPart.toString());
                //    console.log(urlPartSave.toString());
                //});
                //angular.forEach($scope.importproducts.Products, function(value, key){
                //    var urlPartSave = chopUrl(value.ProductUrl);
                //    var urlPart = chopUrl(value.ProductUrl);
                //    splitUrl(urlPart);
                //    urlArray(urlPart);
                //    console.log(urlPart.toString());
                //    console.log(urlPartSave.toString());
                //});
                //
                //// Function to check if a page on nume is returning a 200
                //$scope.getData = function(){
                //    // $http.get('http://localhost:8080/proxy/numeproducts.com/hair-styling/hot-tools/curling-wand/octowand-curling-iron-set/')
                //    $http.get('http://localhost:8080/proxy/numeproducts.com/dddd')
                //
                //        .success(function(data, status, headers, config) {
                //            console.log('The product they are viewing is live again, send user message with redirect warning');
                //            window.alert('the page you are looking for on nume is back, redirect countdown in modal');
                //            // don't run the intervalFunction again since we know the site is back
                //        })
                //        .error(function(data, status, headers, config){
                //            console.log('The product they are viewing is still not returning a 400, do nothing');
                //            console.log('Wait to check again: ' + $scope.howlong);
                //            $scope.intervalFunction();
                //        })
                //
                //};
                ////start with waiting 2.5 seconds to check if nume page is availible and double about of time to check up to 16 seconds
                //var howlong = 0;
                //$scope.howlong  = 2500;
                //$scope.intervalFunction = function(){
                //    if (howlong == 0){
                //        howlong = 2500;
                //    }
                //    $timeout(function() {
                //        $scope.getData();
                //    }, howlong).then(function() {
                //        // You know the timeout is done here
                //        if (howlong < 160000){
                //            howlong = howlong + howlong;
                //            $scope.howlong = howlong;
                //        }
                //
                //    });
                //
                //};
                //// Kick off the interval
                //$scope.getData();
            }
        });






}())


