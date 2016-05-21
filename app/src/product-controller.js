(function(){
    angular.module('catalogApp')
        .controller('ProductCtrl', function($scope, $state, $stateParams, dataservice){
            if(dataservice.productByProductId($stateParams.productId)){
                $scope.product = dataservice.productByProductId($stateParams.productId);
            }
            else {

            }
        });
}());