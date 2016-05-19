
(function(){
    var catalogApp = angular.module('catalogApp', ["ui.router", "angular.filter"])
        //.value('lodash', _)
        .run(function(products){
            //as soon as the application bootstraps
            products.startPolling();
        });
}())