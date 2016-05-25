(function(){
    angular.module('catalogApp')
    .controller('CatalogCtrl', function($scope, $state, dataService){
        $scope.getProducts = dataService.getProducts();
        $scope.getCatalog = dataService.getCatalog();
    });
}());