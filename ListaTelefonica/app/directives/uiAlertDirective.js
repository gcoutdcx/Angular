angular.module('ListaTelefonicaApp').directive('uiAlert' , function () {
    return {
        templateUrl: "view/alert.html",
        replace: true,
        restrict: "E",
        scope: {
            title : "@",
            message: "="
            
        }
    };
});