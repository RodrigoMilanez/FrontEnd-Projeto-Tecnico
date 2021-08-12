angular.module("projetoTecnico").controller("clientesController", function ($scope, clientesService, $location, $routeParams){
    
    var carregarClientes = function () {
        clientesService.get().then(function (response) {
            $scope.clientes = response.data.content;
            console.log(response)
        });
    };
    carregarClientes();
})