angular.module("projetoTecnico").config(function ($routeProvider,$locationProvider){
   //========FUNCIONARIOS===========
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

    $routeProvider.when("/alterarSenha/:id",{
        templateUrl: "view/funcionarios/alterarSenha.html",
        controller: "funcionarioPerfilController"
        })
    //=================CLIENTES==================================
    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clientesController"
    });
    $routeProvider.when("/cadastrarCliente", {
        templateUrl: "view/clientes/cadastrarCliente.html",
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
    $routeProvider.when("/alterarCliente/:id", {
        templateUrl: "view/clientes/alterarCliente.html",
        controller: "clientePerfilController"
    });
    //=================ORDENS DE SERVIÇO========================
    $routeProvider.when("/ordens", {
        templateUrl: "view/ordens.html",
        controller: "ordensController"
    });

    $routeProvider.when("/newOrder", {
        templateUrl: "view/ordens/newOrder.html",
        controller: "ordensController"
    });
    
    $routeProvider.when("/ordens/:id", {
        templateUrl: "view/ordens/ordensDetalhe.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.when("/deletarOrdem/:id", {
        templateUrl: "view/ordens/deletarOrdem.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.when("/diagnostico/:id", {
        templateUrl: "view/ordens/diagnosticoOrdens.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.when("/clienteView/:id", {
        templateUrl: "view/ordens/ordemClienteView.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.when("/Checkout", {
        templateUrl: "view/utilitários/checkout.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.when("/cancelada", {
        templateUrl: "view/utilitários/cancel.html",
        controller: "ordensDetalheController"
    });

    $routeProvider.otherwise("/funcionarios")  
    
})