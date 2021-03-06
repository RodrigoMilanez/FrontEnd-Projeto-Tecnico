angular.module("projetoTecnico").controller("clientePerfilController", function ($scope, clientesService, $location, $routeParams) {

    clientesService.getCliId($routeParams.id).then(function (response) {
        $scope.clientes = response.data;
        console.log(response)
    }).catch(function (error){
        if (error.status = 403){
            alert("Você precisa estar logado para acessar esta página")
    $location.path("/login")
        } else {
            alert(error.data.message)
        }
    });

    $scope.deleteCliente = function (id) {
        clientesService.delete($routeParams.id).then(function (response) {
            $location.path("/clientes");
        }).catch(function (error) {
            alert("Não foi possivel deletar o cliente");
        });
    };

    $scope.alterarCliente = function (id, cliente) {
        var novoCliente = {
            nome: cliente.nome,
            email: cliente.email,
            telefone: cliente.telefone,
            endereco: cliente.endereco
        }
        clientesService.put(id, novoCliente).then(function (response) {
            $location.path("/clientesPerfil/" + id);
        }).catch(function (error) {
            alert("Não foi possivel alterar o cliente");
        });
    };
})