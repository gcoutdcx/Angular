angular.module('ListaTelefonicaApp')
    .controller('DetalhesContatoController', DetalhesContatoController);

function DetalhesContatoController($scope, $routeParams, contato) {
      $scope.contato = contato.data;
};