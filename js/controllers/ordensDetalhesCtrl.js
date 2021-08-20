angular.module("projetoTecnico").controller("ordensDetalheController", function ($scope, ordensService, $location, $routeParams){
    
    ordensService.getId($routeParams.id).then(function (response) {
        $scope.ordens = response.data;
        console.log(response)
});


$scope.deleteOrdem = function (ordemId) {
    ordensService.delete($routeParams.id).then(function (response) {
        $location.path("/ordens");
    }).catch(function (error) {
        alert("Você não tem permissão para deletar a ordem");
    });
};
    $scope.dlt=false;

    $scope.deleteEquipamento = function (ordemId, equipamentoId) {
        ordensService.deleteEq(ordemId ,equipamentoId).then(function (response) {
            $location.path("/ordens/" + ordemId);
        })
    };

})