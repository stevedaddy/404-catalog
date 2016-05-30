(function(){
    angular.module('catalogApp')
    .controller('CatalogCtrl', function($scope, $state, $stateParams, dataService, lodash, $rootScope, $window, $timeout) {
            $scope.getProducts = dataService.getProducts();
            $scope.getCatalog = dataService.getCatalog();
            $scope.catByCatUrl = dataService.catByCatUrl();

            //SIMULATE ANY REQUEST PAGE
            //var simulateRequestUrl = 'http://numeproducts.com';
            //var simulateRequestUrl = 'http://numeproducts.com/styling-tools/curling-wands';
            //var simulateRequestUrl = 'http://numeproducts.com/durrrrr';
            //$scope.catByCatUrl.push(simulateRequestUrl);
            //$scope.requestedPage = simulateRequestUrl;

            //console.log($state.$current.self.name);

            $rootScope.requestedPage = $rootScope.requestedPage || $window.location.href;
            var requestedPage = $rootScope.requestedPage;
            //function (stateOrName, context) {
            //    if (arguments.length === 0) return map(objectKeys(states), function(name) { return states[name].self; });
            //    var state = findState(stateOrName, context || $state.$current);
            //    return (state && state.self) ? state.self : null;
            //}
            isRequestInListOfCats = jQuery.inArray(requestedPage, $scope.catByCatUrl);

            if(isRequestInListOfCats != -1) {
                console.log('Requested: ' + requestedPage);
                console.log('Is in list of cats?: ' + isRequestInListOfCats);
                if (isRequestInListOfCats != -1) {
                    if ($rootScope.requestPolling != false) {
                        $scope.requestPolling = true;
                        $rootScope.requestPolling = $scope.requestPolling;
                    }
                }
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