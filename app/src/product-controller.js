(function(){
    angular.module('catalogApp')
        .controller('ProductCtrl', function($scope, $state, $stateParams, dataService, $rootScope){
            $scope.product = dataService.productByProductId($stateParams.productId);
            if ($rootScope.requestPolling != true){
                $scope.requestPolling = false;
                $rootScope.requestPolling = $scope.requestPolling;
            }
            if(!$scope.product){
                $state.go('error', {}, {location: false});
            }

        });
}());