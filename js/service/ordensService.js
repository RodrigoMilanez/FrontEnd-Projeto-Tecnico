angular.module("projetoTecnico").service("ordensService", function (config, $http, $routeParams) {

    this.get = () => {
        return $http.get(config.apiUrl + "/ordens")
    }
    this.post = (newOrder) => {
        return $http.post(config.apiUrl + "/ordens", newOrder)
    }
    this.deleteEq = (ordemId, equipamentoId) => {
        return $http.delete(config.apiUrl + "/ordens/" + ordemId + "/equipamentos/" + equipamentoId)
    }
    this.delete = (ordemId) => {
        return $http.delete(config.apiUrl + "/ordens/" + ordemId)
    }
    this.getId = (ordemId) => {
        return $http.get(config.apiUrl + "/ordens/" + ordemId)
    }
})