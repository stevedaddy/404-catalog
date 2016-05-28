(function(){
    var catalogApp = angular.module('catalogApp', ['ngAnimate', "ui.router", "angular.filter", 'anim-in-out', 'ui.bootstrap', 'ui.bootstrap.tpls'])
        .value('lodash', _)
        .run(function(dataService, pollRequestedPage){
            dataService.importProducts();
            pollRequestedPage.startPolling(5000);
        });

}());