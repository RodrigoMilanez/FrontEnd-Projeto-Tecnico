angular.module("projetoTecnico").config(function ($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/funcionarios", {
        templateUrl: "view/funcionarios.html",
        controller: "funcionarioController"
    });

    $routeProvider.when("/login", {
        templateUrl: "view/login.html",
        controller: "loginController"
    });
    $routeProvider.when("/cadastroFuncionario", {
        templateUrl: "view/cadastroFuncionario.html",
        controller: "funcionarioController"
    });

    $routeProvider.when("/funcionarioPerfil/:id",{
    templateUrl: "view/funcionarioPerfil.html",
    controller: "funcionarioPerfilController"
    })

    $routeProvider.when("/deletarFuncionario/:id",{
        templateUrl: "view/deletarFuncionario.html",
        controller: "funcionarioPerfilController"
        })
})