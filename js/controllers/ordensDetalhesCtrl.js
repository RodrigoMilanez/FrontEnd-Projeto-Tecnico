angular.module("projetoTecnico").controller("ordensDetalheController", function ($scope, ordensService, $location, $routeParams){
    
    ordensService.getId($routeParams.id).then(function (response) {
        $scope.ordens = response.data;
        console.log(response)
}).catch(function (error){
    if (error.status = 403){
        alert("Você precisa estar logado para acessar esta página")
$location.path("/login")
    } else {
        alert(error.data.message)
    }
});


$scope.deleteOrdem = function (ordemId) {
    ordensService.delete($routeParams.id).then(function (response) {
        $location.path("/ordens");
    }).catch(function (error){
        if (error.status = 403){
            alert("Você precisa estar logado para acessar esta página")
    $location.path("/login")
        } else {
            alert(error.data.message)
        }
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
        }).catch(function (error) {
            alert("Apenas administradores e técnicos podem diagnosticar uma ordem de serviço!")
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
        var updateOrdem = {
            "status": 1
        }
         ordensService.resposta(updateOrdem, ordemId).then(function (response){
            $location.path("/Checkout");
         })
    }

    $scope.cancelar = function(ordemId){
        var updateOrdem = {
            "status": 2
        }
        ordensService.resposta(updateOrdem, ordemId).then(function (response){
           $location.path("/cancelada");
        })
    }

    $scope.concluir = function(ordemId){
        var updateOrdem = {
            "status": 3
        }
        ordensService.concluir(updateOrdem,ordemId).then(function (response){
            window.location.reload()
        })
    }

    
})