angular.module("projetoTecnico").controller("ordensController", function ($scope, ordensService, $location) {
    $scope.ordens = {};

    var carregarOrdens = function () {
        ordensService.get().then(function (response) {
            $scope.ordens = response.data.content;
            console.log(response)
        });
    };
    carregarOrdens();
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }

})