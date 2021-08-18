angular.module("projetoTecnico").service("clientesService", function (config, $http) {

    this.get = () => {
        return $http.get(config.apiUrl + "/clientes")
    }
    this.post = (newCliente) => {
        return $http.post(config.apiUrl + "/clientes", newCliente)
    }
    
    this.delete = (clientesId) => {
        return $http.delete(config.apiUrl + "/clientes/" + clientesId)
    }

    this.getCliId = (clientesId) => {
        return $http.get(config.apiUrl + "/clientes/" + clientesId)
    }

    this.put = (id, novoCliente) => {
        return $http.put(config.apiUrl + "/clientes/" + id, novoCliente)
    }
})