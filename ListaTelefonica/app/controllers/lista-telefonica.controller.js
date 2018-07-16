angular.module('ListaTelefonicaApp')
    .controller('ListaTelefonicaController', ListaTelefonicaController);

function ListaTelefonicaController($scope, contatos, operadoras, serialGenerator) {
    $scope.titulo = "Lista Telefônica";
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.title = "";

    $scope.contatos = contatos.data;
    $scope.operadoras = operadoras.data;

    var generateSerial = function (contatos) {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function (contato) {
        serial = serialGenerator.generate();
        contato.serial = serial;
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            contatos.data;
        });
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    generateSerial(contatos.data);
};