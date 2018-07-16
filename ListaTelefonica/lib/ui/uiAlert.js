angular.module('uiAlert', []);
angular.module('uiAlert').directive('uiAlert' , function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "AE",
    };
});