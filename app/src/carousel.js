//(function(){
//
//    angular.module('catalogApp', ['angular-flexslider'])
//        .controller('carouselCtrl', function($scope) {
//            jQuery('.flexslider').flexslider({
//                animation: "slide",
//                itemWidth: 200,
//                minItems: getGridSize(),
//                maxItems: getGridSize(),
//                directionNav: true,
//                start: function(slider){
//                    flexslider = slider;
//                },
//                itemMargin: 5,
//                animation: "slide",
//                animationLoop: false
//            });
//            // store the slider in a local variable
//            var $window = $(window),
//                flexslider = { vars:{} };
//
//            // tiny helper function to add breakpoints
//            function getGridSize() {
//                return (window.innerWidth < 600) ? 2 :
//                    (window.innerWidth < 900) ? 3 : 4;
//            }
//
//            jQuery(function() {
//                SyntaxHighlighter.all();
//            });
//
//
//
//            // check grid size on resize event
//            $window.resize(function() {
//                var gridSize = getGridSize();
//
//                flexslider.vars.minItems = gridSize;
//                flexslider.vars.maxItems = gridSize;
//            });
//            //console.log($scope.product);
//
//        });
//
//
//}());
