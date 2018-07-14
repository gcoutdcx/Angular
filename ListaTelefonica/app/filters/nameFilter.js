angular.module('ListaTelefonicaApp').filter('name', function () {
    return function (input) {
        var nomes = input.split(" ");
        var nomesFormatado = nomes.map(function (nome) {
            if (/(da|de)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        return nomesFormatado.join(" ");
    };
});