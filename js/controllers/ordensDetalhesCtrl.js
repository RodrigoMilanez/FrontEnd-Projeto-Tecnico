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
        if(ordens.equipamentos.length > 1){

            
        }else{
        var img = document.getElementById("file").files[0];
        var ordemId = ordens.id;
        var equipamentoId = ordens.equipamentos.id;
        ordensService.imagemEq(ordemId, id, img).then(function (response) {
            console.log(img)
        }).catch(function(error){
            alert(error.data.message);
        })
    }   
     };


     /**
      * $scope.uploadFiles = function(IT){
        if(IT.length>1){
            var verifica = true;
            for(var i=0;i<IT.length;i++) {
                if(file[i].files[0] == null){
                    console.log(verifica)
                }
            }
            if(verifica == true) {
                for(var i=0;i<IT.length;i++) {
                   var equipamentoID = IT[i].equipamento.id;    
                    ordemServicoService.adicionarImagem(equipamentoID,
                                                            file[i].files[0]).then((response) => {
                        $scope.uploadIMG = true;
                    }).catch(function(error){
                        alert(error.data.message);
                    })
                }
            }
        }else{
            var img = document.getElementById("file").files[0];
            var IdEquipamento = IT[0].equipamento.id;  
            ordemServicoService.adicionarImagem(IdEquipamento, img).then((response) => {
                console.log(response)
                $scope.uploadIMG = true;
            }).catch(function(error){
                alert(error.data.message);
            })
        }
    }

      */

})