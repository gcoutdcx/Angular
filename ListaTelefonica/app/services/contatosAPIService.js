angular.module('ListaTelefonicaApp').service("contatosAPI", function ($http, config) {
    this.getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };

    this.saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    };
});