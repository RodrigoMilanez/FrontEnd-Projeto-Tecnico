angular.module("projetoTecnico").service("loginService", function(config, $http) {

    this._postLogin= (login) => {
        return $http.post(config.apiUrl + "/login", login)
    }

    this.alterar = function(email) {
        return $http.post(config.apiUrl+"/auth/forgot",email)
    }
})