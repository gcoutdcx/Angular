

angular.module('CalculadoraApp')
    .controller('CalculadoraController', CalculadoraController);


function CalculadoraController($scope) {
    $scope.titulo = "Calculadora";
    $scope.calculo = "";

    $scope.Calcular = function (num1, num2, calculo) {
        if (!num1 || !num2) {
            $scope.resultado = "VOCÊ DEVE INFORMAR OS DOIS CAMPOS PARA EFETUAR O CÁLCULO";
        } else if (isNaN(num1) || isNaN(num2)) {
            $scope.resultado = "O VALOR INFORMADO DEVE SER NUMÉRICO";
        } else if (calculo == false) {
            $scope.resultado = "POR FAVOR, SELECIONE UMA OPERAÇÃO";
        } else {
            if (calculo == "adicao") {
                $scope.resultado = Math.abs((parseInt(num1) + parseInt(num2)));
            } else {
                $scope.resultado = Math.abs((parseInt(num1) - parseInt(num2)));
            }
        }

    };
};




