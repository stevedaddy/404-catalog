
(function(){
    var catalogApp = angular.module('catalogApp', ["ui.router", "angular.filter"])
        .value('lodash', _)
        .run(function(dataService, $rootScope){
            dataService.importProducts();
        });
}());