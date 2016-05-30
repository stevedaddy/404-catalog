(function(){
    angular.module('catalogApp')
    .controller('CatalogCtrl', function($scope, $state, $stateParams, dataService, $rootScope, $window, $timeout) {
            $scope.getProducts = dataService.getProducts();
            $scope.getCatalog = dataService.getCatalog();

            if ($rootScope.requestPolling != false){
                $scope.requestPolling = true;
                $rootScope.requestPolling = $scope.requestPolling;
             }
            // In your main controller
            $rootScope.$on('animStart', function ($event, element, speed) {
                // do something

            });

            $rootScope.$on('animEnd', function ($event, element, speed) {
                // do something

            });
            $rootScope.$on("$stateChangeStart", function() {
                if(!$rootScope.whichState){
                    //if product detail ctrl jump to scroll position
                    $rootScope.scrollValue = jQuery(window).scrollTop();
                   // console.log('set scroll value: ' + $rootScope.scrollValue);
                   // alert($state['current'].controller);
                }
            });

            $scope.$on('$stateChangeSuccess', function () {
                //this varible on the rootscope will only return true if loaded by the product-detail state.
                $rootScope.whichState = $state.is('product-details');
                //if not product detail ctrl log scroll position
                if(!$rootScope.whichState) {
                   // console.log('scrolled to: ' + $rootScope.scrollValue);
                    $timeout(function () {
                        jQuery(window).scrollTop($rootScope.scrollValue);
                    }, 650);
                }
            });
    });
}());