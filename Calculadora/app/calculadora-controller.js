

angular.module('CalculadoraApp')
    .controller('CalculadoraController', CalculadoraController);


function CalculadoraController($scope) {
    $scope.titulo = "Calculadora";
    $scope.calculo = "";


    $scope.Calcular = function (num1, num2, calculo) {
        if (!num1 || !num2) {
            return $scope.resultado = "VOCÊ DEVE INFORMAR OS DOIS CAMPOS PARA EFETUAR O CÁLCULO";
        }
        if (calculo == "adicao") {
            return $scope.resultado = (parseInt(num1) + parseInt(num2));
        }
        return $scope.resultado = (parseInt(num1) - parseInt(num2));
        


    };


};

