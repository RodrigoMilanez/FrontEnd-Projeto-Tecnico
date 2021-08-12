angular.module("projetoTecnico").controller("clientePerfilController", function ($scope, clientesService, $location, $routeParams){
    
    clientesService.getCliId($routeParams.id).then(function (response) {
            $scope.clientes = response.data;
            console.log(response)
    });

   $scope.deleteCliente = function (id) {
        clientesService.delete($routeParams.id).then(function (response) {
            $location.path("/clientes");
        }).catch(function (error) {
            alert("Não foi possivel deletar o cliente");
        });
    };
    
})