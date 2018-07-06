
angular.module('ListaTelefonicaApp')
       .controller('ListaTelefonicaController', ListaTelefonicaController);


function ListaTelefonicaController($scope) {

    $scope.titulo = 'Lista Telefonica';
    $scope.textoBotao = 'MOSTRAR CONTATOS';

    $scope.contatos = [
        {
            nome: 'Rafael',
            apelido: 'Juba',
            estilo: {
               'background': 'red',
               'color': 'white',
               'font-size': '12px' 
            }
        },
        {
            nome: 'Rafael',
            apelido: 'Rafao',
            estilo: {
               'background': 'green',
               'color': 'yellow',
               'font-size': '18px' 
            }
        },
        {
            nome: 'Rafael',
            apelido: 'Rafao',
            estilo: {
               'background': 'green',
               'color': 'yellow',
               'font-size': '18px' 
            }
        }
    ];

    $scope.mostrarContatos = function(){
        $scope.mostrar = !$scope.mostrar;

        $scope.textoBotao = $scope.mostrar ? 'OCULTAR CONTATOS' : 'MOSTRAR CONTATOS';
    };
}