angular.module("projetoTecnico").controller("funcionarioController", function ($scope, funcionarioService, $location) {
    $scope.funcionarios = {};

    var carregarFuncionarios = function () {
        funcionarioService.get().then(function (response) {
            $scope.funcionarios = response.data.content;
            console.log(response)
        }).catch(function (error){
            if (error.status = 403){
                alert("Você precisa estar logado para acessar esta página")
        $location.path("/login")
            } else {
                alert(error.data.message)
            }
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
            alert("Não foi possivel registrar novo funcionário");
        });
    };

   




})