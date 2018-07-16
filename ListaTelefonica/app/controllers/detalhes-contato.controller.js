angular.module('ListaTelefonicaApp')
    .controller('DetalhesContatoController', DetalhesContatoController);

function DetalhesContatoController($scope, $routeParams, contato) {
    $scope.titulo = "Detalhes";
    $scope.contato = contato.data;
};