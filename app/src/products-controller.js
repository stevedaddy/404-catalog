(function(){
    angular.module('catalogApp')
    .controller('productsCtrl', function($scope, $state, products, importproducts, dataservice){
        $scope.importproducts = importproducts;
            dataservice.importProducts();
            console.log(dataservice.getCatalog());
            console.log(dataservice.getProducts());
           //console.log(productsO);
        //$scope.goToDetail = function(cCode) {
        //    $state.go('country', {country: cCode.countryCode});
        //};
       // console.log($scope.$state = $state.current.url);
    })

}())