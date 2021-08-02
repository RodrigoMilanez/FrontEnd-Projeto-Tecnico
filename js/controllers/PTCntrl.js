angular.module("projetoTecnico").controller("projetoTecnicoControle", function ($scope, $http) {
    $scope.message = "duh!";
    $scope.funcionarios = [];
    var carregarFuncionarios = function(){
        $http.get("http://localhost:8080/funcionarios").success(function(data, status){
            $scope.funcionarios =data;
        });
    }
});
