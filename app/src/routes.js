(function(){
    angular.module('catalogApp')
    .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider
            .state('catalog', {
                url: '/',
                controller: 'CatalogCtrl',
                templateUrl: "./partials/catalog.html"

            })

            .state('product-details', {
                url: '/catalog/:productId',
                controller: 'ProductCtrl',
                templateUrl: './partials/product-details.html'
                //onEnter:
                //    function($rootScope) {
                //        $rootScope.$on('$viewContentLoaded', function () {
                //            jQuery('html, body').animate({scrollTop: 0}, 200);
                //
                //        })
                //    }
            })
            .state('error', {
                controller: 'ErrorCtrl',
                templateUrl: "./partials/errorscatalog.html"
            });
         //   $urlRouterProvider.when('', '/');

            $urlRouterProvider.otherwise(function($injector, $location){
                var state = $injector.get('$state');
                var thisPage = $injector.get('$rootScope');
                if('http://numeproducts.com/hair-styling/hot-tools/hair-straightener/silhouette-flat-iron/aaa' == 'http://numeproducts.com/hair-styling/hot-tools/hair-straightener/silhouette-flat-iron/') {
                    state.go('catalog');
                    console.log(thisPage.requestedPage);
                }
                else{
                    state.go('error');
                }
                return $location.path();
            });
    });
}());