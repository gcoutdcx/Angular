angular.module('ListaTelefonicaApp').directive('uiDate', function ($filter) {
    return {
        require: "ngModel",
        link: function (scope, element, attrs, controller) {
            var _formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, "");
                if (date.length > 2) {
                    date = date.substring(0, 2) + "/" + date.substring(2);
                }
                if (date.length > 5) {
                    date = date.substring(0, 5) + "/" + date.substring(5, 9);
                }
                return date;
            }
            element.bind("keyup", function () {
                controller.$setViewValue(_formatDate(controller.$viewValue));
                controller.$render();
            });

            controller.$parsers.push(function (value) {
                if(value.length === 10) {
                    var dateArray = value.split("/");
                    return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
                }
            });

            controller.$formatters.push(function (value) {
                return $filter("date")(value, "dd/MM/yyyy");
            });
        }
    };
});