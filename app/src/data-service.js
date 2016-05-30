(function(){
    angular.module('catalogApp')
        .factory('dataService', function($http, $q, lodash){
            var products = [],
                catalog = [];
            return {
                importProducts: importProducts,
                getProducts: getProducts,
                getCatalog: getCatalog,
                productByProductId: productByProductId,
                productByProductUrl: productByProductUrl
            };
            function importProducts() {
                return $http.get('./resources/catalog.json', {cache: true})
                    .then(function(response){
                        products = products.concat(response.data.Products);
                        catalog = catalog.concat(response.data.Categories);
                    });
            }
            function find(categoryUniqueId){
                return lodash.find(products, {CategoryUniqueId: categoryUniqueId});
            }
            function productByProductId(productId) {
                return lodash.find(products, {ProductUniqueID: productId});
            }
            function productByProductUrl(productUrl) {
                return lodash.find(products, {ProductUrl: productUrl});
            }
            function getProducts(){
                return products;
            }
            function getCatalog(){
                return catalog;
            }
        });
}())