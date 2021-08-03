angular.module("projetoTecnico").controller("projetoTecnicoControle", function(funcionarioService, $scope) {
    $scope.message = "duh!";
    $scope.funcionarios = {};

    var carregarFuncionarios = function () {
        funcionarioService.get().then(function (response) {
            $scope.funcionarios = response.data.content;
            console.log($scope.funcionarios)
        });
    };


    

    carregarFuncionarios();
    
   
})