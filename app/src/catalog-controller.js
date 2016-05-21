(function(){
    angular.module('catalogApp')
    .controller('catalogCtrl', function($scope, $state, dataservice){
        //$scope.importproducts = importproducts;
        $scope.getproducts = dataservice.getProducts();
        $scope.getcatalog = dataservice.getCatalog();
            //dataservice.importProducts() = $scope.importProducts;

            //console.log($scope.getcatalog);
            //console.log($scope.getproducts);
           //console.log(productsO);
        //$scope.goToDetail = function(cCode) {
        //    $state.go('country', {country: cCode.countryCode});
        //};
       // console.log($scope.$state = $state.current.url);
    })

}())