(function(){
    angular.module('catalogApp')
    .controller('catalogCtrl', function($scope, $state, dataService){
        $scope.getproducts = dataService.getProducts();
        $scope.getcatalog = dataService.getCatalog();
    });
}());