(function(){
    var catalogApp = angular.module('catalogApp', ['ui.router']);
    catalogApp.config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/catalog");
        //
        // Now set up the states
        $stateProvider
            .state('catalog', {
                url: "/catalog",
                templateUrl: "./partials/catalog.html"
            })

            .state('detail', {
                url: "/detail",
                templateUrl: "./partials/detail.html"
            })

    });

}())