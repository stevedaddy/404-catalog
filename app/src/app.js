(function(){
    var catalogApp = angular.module('catalogApp', ['ngAnimate', "ui.router", "angular.filter", 'anim-in-out', 'angular-flexslider'])
        .value('lodash', _)
        .run(function(dataService){
            dataService.importProducts();
          //  pollRequestedPage.startPolling(5000);
        });

}());