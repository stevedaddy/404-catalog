(function(){
    angular.module('catalogApp')

    .controller('CatalogCtrl', function($scope, $state, dataService, $rootScope, pollRequestedPage) {
            //console.log($rootScope.howLong);
            pollRequestedPage.startPolling(10000);
            $scope.getProducts = dataService.getProducts();
            $scope.getCatalog = dataService.getCatalog();

            $scope.timeTillTryAgain = $rootScope.howLong;
            $rootScope.$on('howLong', function(event, data) {
                $scope.timeTillTryAgain = data;
                seconds = $scope.timeTillTryAgain * 0.001;
                // Instantiate a counter
                clockFace = 'Counter';
                if(seconds > 59){
                    clockFace = 'MinuteCounter';
                }
                clock = new FlipClock(jQuery('.countdown'), seconds, {
                    clockFace: clockFace,
                    autoStart: true,
                    countdown: true
                });
            });
            seconds = $scope.timeTillTryAgain * 0.001;
            clock = jQuery('.countdown').FlipClock(seconds, {
                countdown: true,
                autoStart: true,
                clockFace: 'Counter'
            });

            // In your main controller
            $rootScope.$on('animStart', function ($event, element, speed) {
                // do something
            });

            $rootScope.$on('animEnd', function ($event, element, speed) {
                // do something
            });

        });



}());