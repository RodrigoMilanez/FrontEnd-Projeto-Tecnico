angular.module("projetoTecnico").service("loginService", function(config, $http) {

    this._postLogin= () => {
        return $http.post(config.apiUrl + "/login")
    }
})