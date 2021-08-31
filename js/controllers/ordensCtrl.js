angular.module("projetoTecnico").controller("ordensController", function ($scope, clientesService,ordensService, $location) {
    $scope.ordens = {};

    var carregarOrdens = function () {
        ordensService.get().then(function (response) {
            $scope.ordens = response.data.content;
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
    carregarOrdens();
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
    var carregarClientes = function () {
        clientesService.get().then(function (response) {
            $scope.clientes = response.data.content;
            console.log(response)
        });
    };
    carregarClientes()
   

    $scope.equipamentos=[];

   $scope.increase = function(equipamento){
       $scope.equipamentos.push(angular.copy(equipamento));
       delete $scope.equipamento;
   }

    $scope.postOrdem = function (newOrder) {
        var ordem = {
            "clienteId" : newOrder.clienteId,
            "pagamento":{
                "@type" : newOrder.pagamento.tipo,
                "numeroDeParcelas" : newOrder.pagamento.parcelas
            },
            "equipamentos": $scope.equipamentos,
        }
        ordensService.post(ordem).then(function (response) {
            $location.path("/ordens");
        }).catch(function (error) {
            alert("Não foi possivel registrar nova ordem");
        });
    };
    
})