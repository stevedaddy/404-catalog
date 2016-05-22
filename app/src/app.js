(function(){
    var catalogApp = angular.module('catalogApp', ["ui.router", "angular.filter"])
        .value('lodash', _)
        .run(function(dataService, pollRequestedPage){
            dataService.importProducts();
            pollRequestedPage.startPolling(5000);
        });
}());