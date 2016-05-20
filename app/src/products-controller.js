(function(){
    angular.module('catalogApp')
    .controller('productsCtrl', function($scope, $state, products, importproducts, dataservice){
        $scope.importproducts = importproducts;
        $scope.getcatalog = dataservice.getCatalog();
        $scope.getproducts = dataservice.getProducts();

            //dataservice.importProducts() = $scope.importProducts;

            console.log($scope.getcatalog);
            console.log($scope.getproducts);
           //console.log(productsO);
        //$scope.goToDetail = function(cCode) {
        //    $state.go('country', {country: cCode.countryCode});
        //};
       // console.log($scope.$state = $state.current.url);
    })

}())