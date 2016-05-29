(function(){
    angular.module('catalogApp')
        .controller('CarouselController', function($scope) {
            $scope.active = 0;



            // chunked arrays -> http://stackoverflow.com/a/21653981/65681
            function chunk(arr, size) {
                var newArr = [];
                $scope.arr = arr || [];
                // console.log($scope.arr);
                var arrayLength = $scope.arr.length;
                for (var i = 0; i < arrayLength; i += size) {
                    newArr.push(arr.slice(i, i + size));
                }
                return newArr;
            }

            $scope.chunkSize = 4;

            // chunk slides so there's two per chunk by default
            $scope.chunkedSlides = chunk($scope.slides, $scope.chunkSize);

            $scope.$on('change-chunk-size', function(event, data) {
                console.log('new chunk size: ' + data);
                if (data !== $scope.chunkSize) {
                    $scope.chunkedSlides = chunk($scope.slides, data);
                    $scope.chunkSize = data;
                }
            });

            var classMap = {
                5: 'col-sm-3',
                4: 'col-sm-3',
                3: 'col-sm-3',
                2: 'col-sm-5'
            };

            $scope.getSlideClass = function(chunkSize) {
                if (classMap[chunkSize]) {
                    return classMap[chunkSize];
                } else {
                    return 'col-sm-10';
                }
            }


        })

        .directive('smartChunking', function($window, SmartChunking) {
            return {
                restrict: 'A',
                link: function($scope) {
                    var w = angular.element($window);

                    // window.outerWidth works on desktop, screen.height on iPad (width returns 768)
                    var width = ($window.outerWidth > 0) ? $window.outerWidth : screen.height;
                    var chunkSize = SmartChunking.getChunkSize(width);
                    if (chunkSize !== 5) {
                        $scope.$emit('change-chunk-size', chunkSize);
                    }

                    $scope.getWidth = function() {
                        return ($window.outerWidth > 0) ? $window.outerWidth : screen.width;
                    };

                    $scope.$watch($scope.getWidth, function(newValue, oldValue) {
                        if (newValue !== oldValue) {
                            var chunkSize = SmartChunking.getChunkSize(newValue);
                            $scope.$emit('change-chunk-size', chunkSize);
                        }
                    });

                    w.bind('resize', function() {
                        $scope.$apply();
                    });
                }
            }
        })

        .service('SmartChunking', function() {
            var large = 1600;
            var medium = 800;
            var small = 500;
            var xsmall = 400;

            this.getChunkSize = function(width) {
                var chunkSize;
                if (width >= large) {
                    chunkSize = 4;
                } else if (width >= medium) {
                    chunkSize = 4;
                } else if (width >= small) {
                    chunkSize = 3;
                } else if (width >= xsmall) {
                    chunkSize = 2;
                } else {
                    chunkSize = 1;
                }
                return chunkSize;
            }
        });
}());
