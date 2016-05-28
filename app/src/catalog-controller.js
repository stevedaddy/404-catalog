(function(){
    angular.module('catalogApp')
    .controller('CatalogCtrl', function($scope, $state, dataService, $rootScope){
        $scope.getProducts = dataService.getProducts();
        $scope.getCatalog = dataService.getCatalog();
            //console.log($scope.getCatalog);


            $scope.slides = $scope.slides || [];
            var slides = $scope.slides;
            perRow = 4;
            $i = 1;


                for(result in $scope.getCatalog) {
                  //  console.log("all cats" + $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                    //console.log($i);
                  // console.log("Cat: " + $scope.getCatalog[result].Name);
                    $p = 1;
                    for(product in $scope.getProducts) {
                        //  console.log("all cats " + $scope.getProducts[product].CategoriesID.indexOf("15"));
                        //    console.log("product " + $scope.getProducts[product].CategoriesID);
                        // console.log($scope.getProducts[product].CategoriesID);


                     //   console.log($scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                        if($scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID) > -1){
                           // console.log("cats" + $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                         //    console.log($scope.getProducts[product].Name);
                            $scope.slides.push({
                                image: $scope.getProducts[product].ImageUrlThumb,
                                name: $scope.getProducts[product].Name,
                                price: $scope.getProducts[product].Price,
                                catids: $scope.getProducts[product].CategoriesID,
                                id: $scope.getProducts[product].ProductUniqueID
                            });
                          // console.log($p);
                            if($p >= 4){
                                $p = 0;
                            }
                           else{
                              // console.log($p);
                            }
                          //  console.log("cats" + $scope.getProducts[product].CategoriesID.indexOf($scope.getCatalog[result].CategoryUniqueID));
                          //  console.log(result);
                          // console.log($scope.getCatalog[result].CategoryUniqueID);
                           // console.log($scope.getCatalog[result].Name);
                            $p++;
                        }

                    }

               $i++;
            }

      // In your main controller
        $rootScope.$on('animStart', function($event, element, speed) {
            // do something
        });

        $rootScope.$on('animEnd', function($event, element, speed) {
            // do something
        });

    });

}());