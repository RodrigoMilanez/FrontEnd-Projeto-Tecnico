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
    this.imagemEq = (ordemId, equipamentoId, file) => {
        var fd = new FormData();
        fd.append('file', file);
        return $http.post(config.apiUrl + "/ordens/" + ordemId + "/equipamentos/" + equipamentoId +"/pictures", fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
    }
    this.diagnostico = (ordem,ordemId) => {
        return $http.put(config.apiUrl + "/ordens/" + ordemId + "/diagnostico", ordem)
    }

    this.aceitar = (ordemId) => {
        return $http.get(config.apiUrl + "/ordens/" + ordemId + "/aprovado")
    }

    this.cancelar = (ordemId) => {
        return $http.get(config.apiUrl + "/ordens/" + ordemId + "/cancelar")
    }
})
