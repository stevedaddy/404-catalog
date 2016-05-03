(function(){
   // var catalogApp = angular.module('catalogApp', ['ui.router']);
    angular.module('catalogApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //
        // For any unmatched url, redirect to /404
        $urlRouterProvider.otherwise("/404");
        //
        // Now set up the states
        $stateProvider
            .state('catalog', {
                url: "/catalog",
                controller: 'productsCtrl',
                templateUrl: "./partials/catalog.html",
                resolve: {
                    importproducts: function (api) {
                        //if there's a cached version saved in api2 don't load a new one when the state is loaded
                        if(!api.cache){
                            api.cache = api.importProducts()
                        }
                        return api.cache
                    }
                }
            })

            .state('product', {
                url: "/catalog/:product/:more",

                templateUrl: "./partials/detail.html",

                resolve: {
                    thisproduct :  function(api, $stateParams) {
                      //  $stateParams.thisproduct = api.searchThisProductInfo($stateParams.product);
                        console.log($stateParams.product + '/' + $stateParams.more);
                      //  console.log($stateParams.more);
                        return $stateParams.thisproduct;
                    }
                }

            })
            .state('404', {
                url: "/404",
                templateUrl: "./partials/404.html"

            })

    })


}())