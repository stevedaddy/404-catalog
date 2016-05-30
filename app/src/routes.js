(function(){
    angular.module('catalogApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('catalog', {
                url: "/",
                controller: 'CatalogCtrl',
                templateUrl: "./partials/catalog.html"
            })
            .state('product-details', {
                url: '/catalog/:productId',
                controller: 'ProductCtrl',
                templateUrl: './partials/product-details.html'
            })
            .state('error', {
                controller: 'ErrorCtrl',
                templateUrl: "./partials/errorscatalog.html"
            });
            $urlRouterProvider.when('', '/');
            //// For any unmatched url, redirect to /404
            $urlRouterProvider.otherwise(function($injector, $location){
                var state = $injector.get('$state');
                state.go('error');
                return $location.path();
            });
    });
}());