angular.module('ListaTelefonicaApp').service("contatosAPI", function ($http, config) {
    this.getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };

    this.getContato = function (id) {
        return $http.get(config.baseUrl + "/contatos/" + id);
    };

    this.saveContato = function (contato) {
        return $http.post(config.baseUrl + "/contatos", contato);
    };
});