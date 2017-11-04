myApp.factory('Data', ['$http', function($http) {
    var config = {headers: {
            'content-type': 'application/json'
        }
    };
    var obj = {};
    obj.get = function (q) {
        return $http.get(q).then(function (results) {
            return results;
        });
    };
    return obj;

}]);