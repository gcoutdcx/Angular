
angular.module('ListaTelefonicaApp')
    .controller('ListaTelefonicaController', ListaTelefonicaController);

function ListaTelefonicaController($scope) {
    $scope.titulo = "Lista Telefônica";

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.contatos = [
        { nome: "Allyson", telefone: "999111", cor: "blue" },
        { nome: "Maria", telefone: "999222", cor: "yellow" },
        { nome: "Julia", telefone: "999333", cor: "red" },
    ];

    $scope.operadoras = [
        { nome: "Oi", codigo: "14", categoria: "Celular" },
        { nome: "Vivo", codigo: "15", categoria: "Celular" },
        { nome: "Tim", codigo: "41", categoria: "Celular" },
        { nome: "GVT", codigo: "25", categoria: "Fixo" },
        { nome: "Embratel", codigo: "21", categoria: "Fixo" },
    ];

    $scope.adicionarContato = function (contato) {
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
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
};