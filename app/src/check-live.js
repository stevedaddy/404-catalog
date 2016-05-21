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
                        return $q.when(response.data);
                    });
            }
        });


}());
