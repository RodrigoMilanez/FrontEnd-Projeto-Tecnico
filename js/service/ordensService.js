angular.module("projetoTecnico").service("ordensService", function (config, $http, $routeParams) {

    this.get = () => {
        return $http.get(config.apiUrl + "/ordens")
    }
    /*this.post = (newFuncionario) => {
        return $http.post(config.apiUrl + "/ordens", newFuncionario)
    }
    
    this.delete = (funcionarioId) => {
        return $http.delete(config.apiUrl + "/ordens/" + funcionarioId)
    }
*/
    this.getId = (ordemId) => {
        return $http.get(config.apiUrl + "/ordens/" + ordemId)
    }
})