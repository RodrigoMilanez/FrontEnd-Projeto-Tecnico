angular.module("projetoTecnico").controller("projetoTecnicoControle", function ($scope, $http) {
    $scope.message = "Hello World!";
    $scope.funcionarios = [];
    var carregarFuncionarios = function(){
        $http.get("http://localhost:8080/funcionarios").success(function(data, status){
            console.log(data);
        });
    }
});