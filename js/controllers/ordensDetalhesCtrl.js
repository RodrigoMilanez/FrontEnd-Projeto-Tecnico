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

    $scope.uploadImagem=false;


    $scope.deleteEquipamento = function (ordemId, equipamentoId) {
        ordensService.deleteEq(ordemId ,equipamentoId).then(function (response) {
            window.location.reload()
        })
    };

    $scope.diagnostico = function (ordens ,ordemId){
        ordensService.diagnostico(ordens ,ordemId).then(function (response) {
            $location.path("/ordens/"+ ordemId);
        })
    }

    //TERMINAR IMAGEM
    $scope.enviarFoto = function(ordens, id) {   
        var ordemId = ordens.id;
        var img = document.getElementById("file").files[0];
        var equipamentoId = ordens.equipamentos.id;
        ordensService.imagemEq(ordemId, id, img).then(function (response) {
            console.log(img)
            window.location.reload()
        }).catch(function(error){
            alert(error.data.message);
        })
    }   
    
    $scope.aceitar = function(ordemId){
        
         ordensService.aceitar(ordemId).then(function (response){
            $location.path("/Checkout");
         })
    }

    $scope.cancelar = function(ordem){
        var ordemId = ordem.id
        ordensService.cancelar(ordemId).then(function (response){
           $location.path("/cancelada");
        })
    }

    $scope.concluir = function(ordem){
        var ordemId = ordem.id
        ordensService.concluir(ordemId).then(function (response){
            window.location.reload()
        })
    }

    
})

    

    


