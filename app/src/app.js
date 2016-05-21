
(function(){
    var catalogApp = angular.module('catalogApp', ["ui.router", "angular.filter"])
        .value('lodash', _)
        .run(function(products, dataservice, $rootScope){
            products.startPolling();
            dataservice.importProducts();

        });
}());