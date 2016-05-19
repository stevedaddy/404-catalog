(function(){
    angular.module('catalogApp')
        .factory('dataservice', function($http, $q, lodash){

            var products = [],
                catalog = [];

            return {
                importProducts: importProducts,
                getPoducts: getPoducts,
                getCatalog: getCatalog
            };

            function importProducts() {
                return $http.get('./resources/catalog.json', {cache: true})
                    .then(function(response){
                        products = [];
                        catalog = [];
                        products = products.concat(response.data.Products);
                        products = products.concat(response.data.Catagories);
                    });
            }

            function find(categoryUniqueId){
                return lodash.find(products, {CategoryUniqueId: categoryUniqueId});
            }

            function getPoducts(){
                return products;
            }

            function getCatalog(){
                return catalog;
            }

        });


}())