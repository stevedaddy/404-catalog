(function(){
    angular.module('catalogApp')
        .directive('header', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: "./partials/header.html",
                controller: function ($scope, $rootScope, pollRequestedPage) {
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

        })
        .directive('yotpo', function ($document, $timeout) {
            return {
                restrict: 'AE',
                link: function() {
                    function loadWidget() {
                        var e = document.createElement("script");

                        e.type = "text/javascript",
                            e.async = true,
                            e.src = "//staticw2.yotpo.com/5V1JjFE0H9IbFZ7pw1lFdiG15fSS81to6JC3E5ty/widget.js",
                            e.id = "5V1JjFE0H9IbFZ7pw1lFdiG15fSS81to6JC3E5ty";

                        var t = document.getElementsByTagName("script")[0];
                        t.parentNode.insertBefore(e,t);
                    }

                    loadWidget();

                    if (typeof yotpo !== 'undefined') {
                        $timeout(function () {
                            yotpo.initWidgets();
                        }, 500)

                    }
                }
            }
        });

}());