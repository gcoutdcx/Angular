angular.module('ListaTelefonicaApp').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/contatos");

    $stateProvider.state("contatos", {
        url: "/contatos",
        templateUrl: "view/contatos.html",
        controller: "ListaTelefonicaController",
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    }).state("novoContato", {
        url: "/novoContato",
        templateUrl: "view/novoContato.html",
        controller: "NovoContatoController",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    }).state("detalheContato", {
        url: "/detalheContato",
        templateUrl: "view/detalhesContato.html",
        controller: "DetalhesContatoController",
        params: {
            id: 0
        },
        resolve: {
            contato: function (contatosAPI, $stateParams) {
                return contatosAPI.getContato($stateParams.id);
            }
        }
    }).state("error", {
        url:"/error",
        templateUrl: "view/error.html",
    });

});