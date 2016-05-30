(function(){
    angular.module('catalogApp')
    .controller('CatalogCtrl', function($scope, $state, dataService, $rootScope) {

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

        });



}());