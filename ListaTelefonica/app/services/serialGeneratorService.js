angular.module('ListaTelefonicaApp').provider('serialGenerator', function () {
    var _length = 5; 

    this.getLength = function () {
        return _length
    };

    this.setLength = function (length) {
        length = length;
    };

    this.$get = function () {
        return {
            generate: function () {
                var serial = "";
                while (serial.length < _length){
                    serial += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
                }
                return serial;
            }
        };
    };
});