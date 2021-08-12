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
        templateUrl: "view/funcionarios/cadastroFuncionario.html",
        controller: "funcionarioController"
    });

    $routeProvider.when("/funcionarioPerfil/:id",{
    templateUrl: "view/funcionarios/funcionarioPerfil.html",
    controller: "funcionarioPerfilController"
    })

    $routeProvider.when("/deletarFuncionario/",{
        templateUrl: "view/funcionarios/deletarFuncionario.html",
        controller: "funcionarioPerfilController"
        })

    $routeProvider.when("/alterarCadastro/:id",{
        templateUrl: "view/funcionarios/alterarCadastro.html",
        controller: "funcionarioPerfilController"
        })

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    });
    $routeProvider.when("/clientesPerfil/:id", {
        templateUrl: "view/clientes/clientesPerfil.html",
        controller: "clientePerfilController"
    });
    $routeProvider.when("/deletarCliente/:id", {
        templateUrl: "view/clientes/deletarCliente.html",
        controller: "clientePerfilController"
    });
})