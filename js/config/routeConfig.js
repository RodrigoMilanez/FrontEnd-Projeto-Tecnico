angular.module("projetoTecnico").config(function ($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/funcionarios", {
        templateUrl: "view/funcionarios.html",
        controller: "funcionarioController"
    });
});