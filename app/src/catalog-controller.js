(function(){
    angular.module('catalogApp')
    .controller('catalogCtrl', function($scope, $state, dataservice){
        $scope.getproducts = dataservice.getProducts();
        $scope.getcatalog = dataservice.getCatalog();
    });
}());