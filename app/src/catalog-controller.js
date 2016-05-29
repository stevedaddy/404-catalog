(function(){
    angular.module('catalogApp')

    .controller('CatalogCtrl', function($scope, $state, dataService, $rootScope){
        $scope.getProducts = dataService.getProducts();
        $scope.getCatalog = dataService.getCatalog();
       // window.sc = $scope;
            //console.log($scope.getCatalog);
            //
            //for($scope, function(value, key){
            //    console.log(key);
            //});
            //
            ////Inner foo
            //console.log('\nInner ctrl -> internal cat prop:');
            //console.log($scope.cat, '(synchronous)');
            //setTimeout(logInner, 0, 'from inner ctrl (timeout)');
            //$scope.type = 'from inner ctrl ($eval)';
            //$scope.$evalAsync(logInner);

            ////Outer foo
            //console.log('\nInner ctrl -> inherited foo prop:');
            //console.log($scope.outerFoo, '(synchronous)\n');


            // In your main controller
            $rootScope.$on('animStart', function($event, element, speed) {
                // do something
            });

            $rootScope.$on('animEnd', function($event, element, speed) {
                // do something
            });

            $scope.slides = $scope.slides || [];
            var slides = $scope.slides;

            perRow = 4;
            $i = 1;

                    //console.log($i);
                  // console.log("Cat: " + $scope.getCatalog[result].Name);
                  //  console.log($scope.getCatalog[result].CategoryUniqueID);
                   $p = 1;
                    for(product in $scope.getProducts) {

                      //  console.log($scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID) > -1);
                      //
                      //  for(result in $scope.getCatalog) {
                      //      var cat = $scope.getCatalog[result].CategoryUniqueID;


                      //  console.log(cat);
                      //  for(result in $scope.getCatalog) {

                            //   console.log($scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                            if ($scope.getProducts[product].CategoriesID.indexOf("15") != -1 || 0) {
                                // console.log("cats" + $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                                //    console.log($scope.getProducts[product].Name);
                                //  console.log("all cats " + $scope.getProducts[product].CategoriesID.indexOf("15"));

                                //if ($scope.slide) {
                                //    if ($scope.slides.indexOf($scope.slide) == -1) {
                                //        $scope.slides.push($scope.slide);
                                //        $scope.todo = '';
                                //        $scope.alert = $scope.alerts[1];
                                //    }else{
                                //        // $scope.todo is already in the $scope.todos array, alert the user
                                //        $scope.alert = $scope.alerts[3];
                                //    }
                                //}else{
                                //    $scope.alert = $scope.alerts[0];
                                //}



                                    $scope.slides.push({
                                        image: $scope.getProducts[product].ImageUrlThumb,
                                        name: $scope.getProducts[product].Name,
                                        price: $scope.getProducts[product].Price,
                                        catids: $scope.getProducts[product].CategoriesID,
                                        id: $scope.getProducts[product].ProductUniqueID,
                                        //  iterated: $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID) > -1,
                                        numiterator: $p
                                    });




                            }

                                if ($p == 4) {
                                    $p = 0;
                                }

                                //  console.log("cats" + $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                                //  console.log(result);
                                // console.log($scope.getCatalog[result].CategoryUniqueID);
                                // console.log($scope.getCatalog[result].Name);
                                $p++;
                            }


                 //   }

               $i++;

           // var ids = $scope.slides.map(function(obj) { return obj.id; });
           // ids = ids.filter(function(v,i) { return ids.indexOf(v) == i; });
           // $i = 0;
           // for(result in $scope.slides) {
           //     $scope.slides.filter(function(v,i) { return ids.indexOf(v) == i; });
           //    // console.log(_.chain($scope.slide).pluck('id').unique().value());
           //     $i++
           // }
           // findById: function(ProductoId) {
           //     return _.find(productos, function (producto) {
           //         return parseInt(pruducto.id) === parseInt(id);
           //     });
           // }
           // findById();
           //// console.log(ids); //=> [17, 35]


            });



}());