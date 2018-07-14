
angular.module('ListaTelefonicaApp')
    .controller('ListaTelefonicaController', ListaTelefonicaController);

function ListaTelefonicaController($scope, contatosAPI, operadorasAPI, serialGenerator) {
    $scope.titulo = "Lista Telefônica";
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().success(function (data) {
            data.forEach(function (item) {
                item.serial = serialGenerator.generate();
            });
            $scope.contatos = data;
        }).error(function (data, status) {
            $scope.error = "Não foi possível carregar os dados!";
        });
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().success(function (data) {
            $scope.operadoras = data;
        });
    };

    $scope.adicionarContato = function (contato) {
        serial = serialGenerator.generate();
        contato.serial = serial;
        contato.data = new Date();
        contatosAPI.saveContato(contato).success(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
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

    carregarContatos();
    carregarOperadoras();
};