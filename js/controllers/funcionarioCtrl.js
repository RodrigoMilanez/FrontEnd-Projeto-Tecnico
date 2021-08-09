angular.module("projetoTecnico").controller("funcionarioController", function(funcionarioService, $scope) {
    $scope.funcionarios = {};

    var carregarFuncionarios = function () {
        funcionarioService.get().then(function (response) {
            $scope.funcionarios = response.data.content;
            console.log($scope.funcionarios)
        });
    };
    carregarFuncionarios();
    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
})