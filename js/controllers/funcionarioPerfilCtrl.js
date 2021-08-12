angular.module("projetoTecnico").controller("funcionarioPerfilController", function ($scope, funcionarioService, $location, $routeParams){
    
        funcionarioService.getFuncId($routeParams.id).then(function (response) {
            $scope.funcionarios = response.data;
            console.log(response)
    });

   $scope.deleteFuncionario = function (id) {
        funcionarioService.delete($routeParams.id).then(function (response) {
            $location.path("/funcionarios");
        }).catch(function (error) {
            alert("Você não tem permissão para deletar o cliente");
        });
    };

    $scope.deleteFuncionario = function (id) {
        funcionarioService.delete($routeParams.id).then(function (response) {
            $location.path("/funcionarios");
        }).catch(function (error) {
            alert("Você não tem permissão para deletar o cliente");
        });
    };
})