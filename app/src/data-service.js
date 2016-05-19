(function(){
    angular.module('catalogApp')
        .factory('dataservice', function($http, $q, lodash){

            var productsO = [],
                catalogO = [];

            return {
                importProducts: importProducts,
                getProducts: getProducts,
                getCatalog: getCatalog
            };

            function importProducts() {
                return $http.get('./resources/catalog.json', {cache: true})
                    .then(function(response){
                        productsO = [];
                        catalogO = [];
                        productsO = productsO.concat(response.data.Products);
                        catalogO = catalogO.concat(response.data.Categories);
                        console.log(catalogO);
                        console.log(productsO);
                    });
            }

            function find(categoryUniqueId){
                return lodash.find(products, {CategoryUniqueId: categoryUniqueId});
            }

            function getProducts(){
                return productsO;
            }

            function getCatalog(){
              //  console.log(catalog);
                return catalogO;

            }

        });


}())