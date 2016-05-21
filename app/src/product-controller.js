(function(){
    angular.module('catalogApp')
        .controller('productCtrl', function($scope, $stateParams, dataService){
            $scope.product = dataservice.productByProductId($stateParams.productId);
        });
}());