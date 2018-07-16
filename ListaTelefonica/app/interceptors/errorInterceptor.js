angular.module('ListaTelefonicaApp').factory('errorInterceptor', function ($location, $q) {
    return {
        responseError:function(rejection) {
            if (rejection.status === 404) {
                $location.path("/error");
            }
            return $q.reject(rejection);
        }
    };
});