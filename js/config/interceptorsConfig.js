angular.module("projetoTecnico").config(function($httpProvider){
    $httpProvider.interceptors.push("authInterceptor");
})