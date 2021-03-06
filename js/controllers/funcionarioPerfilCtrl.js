angular.module("projetoTecnico").controller("funcionarioPerfilController", function ($scope, funcionarioService, $location, $routeParams){
    
        funcionarioService.getFuncId($routeParams.id).then(function (response) {
            $scope.funcionarios = response.data;
            console.log(response)
    }).catch(function (error){
        if (localStorage.token == null){
            console.log(localStorage)
            alert("Você precisa estar logado para acessar esta página")
        $location.path("/login")
        } else if (error.status == 403) {
            alert(error.data.message)
            $location.path("/funcionarios")
        }
    });

   $scope.deleteFuncionario = function (id) {
        funcionarioService.delete($routeParams.id).then(function (response) {
            $location.path("/funcionarios");
        }).catch(function (error) {
            alert("Você não tem permissão para deletar o funcionário");
        });
    };

    $scope.alteraSenha = function (x, id) {
        funcionarioService.postSenha(x, id).then(function (response) {
            $location.path("/funcionarioPerfil/{{id}}" );
        }).catch(function (error) {
            alert("Falha na atualização de senha");
        });
    };
})