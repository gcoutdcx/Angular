angular.module('ListaTelefonicaApp')
    .controller('NovoContatoController', NovoContatoController);

function NovoContatoController($scope, contatosAPI, serialGenerator, operadoras, $location) {
    $scope.titulo = "Adicionar Contato";
    $scope.title = "";

    $scope.operadoras = operadoras.data;

    $scope.adicionarContato = function (contato) {
        serial = serialGenerator.generate();
        contato.serial = serial;
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };

};