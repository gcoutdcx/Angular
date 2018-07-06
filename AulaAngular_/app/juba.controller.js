angular.module('ListaTelefonicaApp')
       .controller('JubaController', JubaController);


function JubaController($scope){

    $scope.pessoa = {
        nome: 'Rafael',
        idade: 25
    };

    $scope.enviar = function(){
        alert($scope.pessoa.nome + ' tem ' + $scope.pessoa.idade + ' anos');
    };

}