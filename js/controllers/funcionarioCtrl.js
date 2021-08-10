angular.module("projetoTecnico").controller("funcionarioController", function ($scope, funcionarioService, $location) {
    $scope.funcionarios = {};

    var carregarFuncionarios = function () {
        funcionarioService.get().then(function (response) {
            $scope.funcionarios = response.data.content;
            console.log($scope.funcionarios)
        });
    };
    carregarFuncionarios();
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

    $scope.postFuncionario = function (newFuncionario) {
        funcionarioService.post(newFuncionario).then(function (response) {
            $location.path("/funcionarios");
        }).catch(function (error) {
            alert("Algo deu errado");
        });
    };

    $scope.deletarFuncionario = function (funcionarios) {
        funcionarios.filter(function (funcionario) {
            if (contato.selecionado) {
                console.log(funcionarios)
            }
        });
    };
})