angular.module("projetoTecnico").controller("loginController", function($scope, loginService, $location) {
   
    $scope.postLogin = function(login){
        loginService._postLogin(login).then(function(response){
            const authorization = response.headers("authorization");
            localStorage.setItem("token", authorization);
            $location.path("/funcionarios");
        }).catch(function(error){
                alert("Usúario ou senha incorretos!");
        });
    }
})
//loginService.login(user).then((response) => {
//    const authorization = response.headers("authorization");
//  localStorage.setItem("token", authorization);
// console.log($scope.showNavBar)
//    $location.path("/app");
//}).catch(function(error){
//    alert("Usúario ou senha incorretos!");
//})
