angular.module('ListaTelefonicaApp')
    .controller('ListaTelefonicaController', ListaTelefonicaController);

function ListaTelefonicaController($scope, contatos, operadoras, serialGenerator, $state) {
    $scope.titulo = "Lista Telefônica";
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";
    $scope.title = "";

    var inicializar = function () {
        $scope.contatos = contatos.data;
        $scope.operadoras = operadoras.data;
        calcularImpostos($scope.contatos);
        generateSerial(contatos.data);
    };

    var calcularImpostos = function (contatos) {
        contatos.forEach(function (contato) {
            contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
        });
    };

    var calcularImposto = function (preco) {
        var imposto = 1.4;
        return preco * imposto;
    };


    var generateSerial = function (contatos) {
        contatos.forEach(function (item) {
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function (contato) {
        serial = serialGenerator.generate();
        contato.serial = serial;
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            contatos.data;
        });
    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
        $scope.verificarContatoSelecionado($scope.contatos);
    };

    $scope.verificarContatoSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    $scope.detalheContato = function (id){
        $state.go("detalheContato", {
            id: id
        });
    };

    inicializar();
};