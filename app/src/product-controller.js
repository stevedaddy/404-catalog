(function(){
    angular.module('catalogApp')
        .controller('ProductCtrl', function($scope, $state, $stateParams, dataService){
            $scope.product = dataService.productByProductId($stateParams.productId);
            //console.log($scope.product);
            if(!$scope.product){
                $state.go('error', {}, {location: false});
            }
        });
}());