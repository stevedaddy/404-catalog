(function(){
    angular.module('catalogApp')
        .directive('header', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: "./partials/header.html",
                controller: function ($scope, $rootScope, pollRequestedPage) {
                    // Your behaviour goes here :)
                    pollRequestedPage.startPolling(10000);
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
                }
        }
    });
}());