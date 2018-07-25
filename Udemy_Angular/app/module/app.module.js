angular.module("App", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when("/home", {
            templateUrl: "view/home.html",
            controller: "AppController"
        })
        .when("/contato", {
            templateUrl: "view/contato.html",
            controller: "ContatoController"
        });

        $routeProvider.otherwise({redirectTo: "/home"});
    })