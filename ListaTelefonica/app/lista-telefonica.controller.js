
angular.module('ListaTelefonicaApp')
    .controller('ListaTelefonicaController', ListaTelefonicaController);

function ListaTelefonicaController($scope, $http) {
    $scope.titulo = "Lista Telefônica";
    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.contatos = [];

    $scope.operadoras = [
        { nome: "Oi", codigo: "14", categoria: "Celular", preco: 2 },
        { nome: "Vivo", codigo: "15", categoria: "Celular", preco: 3 },
        { nome: "Tim", codigo: "41", categoria: "Celular", preco: 2 },
        { nome: "GVT", codigo: "25", categoria: "Fixo", preco: 1 },
        { nome: "Embratel", codigo: "21", categoria: "Fixo", preco: 3 },
    ];

    var carregarContatos = function () {

    };


    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
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
};