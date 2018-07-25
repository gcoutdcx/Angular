angular.module('App')
    .controller('AppController', AppController);

function AppController($scope) {
    $scope.titulo = "Home";
    $scope.alunos = [
        { nome: "Camila", email: "camila@mail.com", nota1: 65, nota2: 80, nota3: 55 },
        { nome: "Pedro", email: "pedro@mail.com", nota1: 50, nota2: 55, nota3: 60 },
        { nome: "Maria", email: "maria@mail.com", nota1: 70, nota2: 85, nota3: 65 },
        { nome: "João", email: "joao@mail.com", nota1: 90, nota2: 85, nota3: 70 },
    ];

    var inicializar = function () {
        $scope.alunos.forEach(function (aluno) {
            aluno.media = media(aluno);
        });
        limpaForm();
    };

    var media = function (aluno) {
        var media = (parseFloat(aluno.nota1 + aluno.nota2 + aluno.nota3) / 3);
        return media.toFixed(2);
    };

    $scope.abreAddAluno = function () {
        $scope.editando = false;
        limpaForm();
        $('#modal2').modal('show');
    };

    $scope.addAluno = function (aluno) {
        aluno.media = media(aluno);
        $scope.alunos.push(aluno);
        $("#modal2").modal('hide');
        limpaForm();
    };

    $scope.editando = false;
    var alunoEditar;

    $scope.editarAluno = function (aluno) {
        $scope.editando = true;
        angular.copy(aluno, $scope.aluno);
        $('#modal2').modal('show');
        alunoEditar = aluno;
    };

    $scope.salvarAluno = function (aluno) {
        alunoEditar.nome = aluno.nome;
        alunoEditar.email = aluno.email;
        alunoEditar.nota1 = aluno.nota1;
        alunoEditar.nota2 = aluno.nota2;
        alunoEditar.nota3 = aluno.nota3;
        alunoEditar.media = media(aluno);
        $('#modal2').modal('hide');
    };

    $scope.deletarAluno = function (aluno) {
        for (var index in $scope.alunos) {
            var aux = $scope.alunos[index];
            if (aluno === aux) {
                $scope.alunos.splice(index, 1);
            }
        }
    };

    var limpaForm = function () {
        $scope.aluno = { nome: "", email: "", nota1: "", nota2: "", nota3: "", media: "" };
    };

    inicializar();

};