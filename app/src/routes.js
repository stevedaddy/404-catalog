(function(){
    angular.module('catalogApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('catalog', {
                url: "/",
                controller: 'catalogCtrl',
                templateUrl: "./partials/catalog.html"
            })
            .state('product-details', {
                url: '/catalog/:productId',
                controller: 'ProductCtrl',
                templateUrl: './partials/product-details.html'
            });
            $urlRouterProvider.when('', '/');
            //// For any unmatched url, redirect to /404
            $urlRouterProvider.otherwise("/404");
    })
}())