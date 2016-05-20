(function(){
    angular.module('catalogApp')
    app.factory('MyCache', function ($cacheFactory) {
        return $cacheFactory('myCache');
    });


}())