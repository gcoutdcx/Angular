angular.module('ListaTelefonicaApp')
    .controller('DetalhesContatoController', DetalhesContatoController);

function DetalhesContatoController($scope, contato) {
    $scope.titulo = "Detalhes";
    $scope.contato = contato.data;
};