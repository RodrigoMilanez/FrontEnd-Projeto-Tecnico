angular.module("projetoTecnico").controller("clientesController", function ($scope, clientesService, $location, $routeParams){
    
    var carregarClientes = function () {
        clientesService.get().then(function (response) {
            $scope.clientes = response.data.content;
            console.log(response)
        });
    };
    carregarClientes();
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

    $scope.postCliente = function (newCliente) {
        clientesService.post(newCliente).then(function (response) {
            $location.path("/clientes");
        }).catch(function (error) {
            alert("Não foi possivel registrar novo cliente");
        });
    };
})