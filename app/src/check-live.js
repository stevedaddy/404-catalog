(function(){
    angular.module('catalogApp')
        .factory('api', function($http, $q){
            return {
                importProducts : importProducts
            };
            function importProducts() {
                var reqParams = {
                    type: 'JSON'
                };

                return $http.get('./resources/catalog.json', {cache: true})
                    .then(function (response) {
                        //if there's a cached version saved in api2 don't load a new one when the state is loaded
                        var cache;
                        if(!cache) {
                            cache = $q.when(response.data);
                           // console.log(JSON.stringify(response.data));
                        }
                        return cache;
                    });
            }
        })


}())


