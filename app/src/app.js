
(function(){
    var catalogApp = angular.module('catalogApp', ["ui.router", "angular.filter"])
        .value('lodash', _)
        .run(function(products, dataservice){
            //as soon as the application bootstraps
           // dataservice.importProducts();
          //  dataservice.getCatalog();
           // dataservice.getProducts();
            //console.log(dataservice.importProducts());
            //console.log(dataservice.getCatalog());
            //console.log(dataservice.getProducts());
            //console.log(dataservice.getCatalog);
            products.startPolling();
        });
}());