angular.module("projetoTecnico").controller("clientesController", function ($scope, clientesService, $location, $routeParams){
    
    var carregarClientes = function () {
        clientesService.get().then(function (response) {
            $scope.clientes = response.data.content;
            console.log(response)
        }).catch(function (error){
            if (error.status = 403){
                alert("Você precisa estar logado para acessar esta página")
        $location.path("/login")
            } else {
                alert(error.data.message)
            }
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