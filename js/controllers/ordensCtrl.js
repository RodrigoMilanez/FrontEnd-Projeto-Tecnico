angular.module("projetoTecnico").controller("ordensController", function ($scope, clientesService,ordensService, $location) {
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
    var carregarClientes = function () {
        clientesService.get().then(function (response) {
            $scope.clientes = response.data.content;
            console.log(response)
        });
    };
    carregarClientes()

    $scope.postOrdem = function (newOrder) {
        var ordem = {
            "nome" : newOrder.nome,
            "pagamento": {
                "@type" : newOrder.pagamento.tipo
            },
            "equipamentos": [ { 
                "nome":newOrder.equipamentos.nome,
                "tipo": newOrder.equipamentos.tipo,
                "marca": newOrder.equipamentos.marca,
                "avaria": newOrder.equipamentos.avaria,
                "orcamento": 0
            }
        ]
        }
        ordensService.post(ordem).then(function (response) {
            $location.path("/funcionarios");
        }).catch(function (error) {
            alert("Não foi possivel registrar novo funcionário");
        });
    };

   
    
})