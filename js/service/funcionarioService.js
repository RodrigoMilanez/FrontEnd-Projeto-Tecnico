angular.module("projetoTecnico").service("funcionarioService", function (config, $http) {

    this.get = () => {
        return $http.get(config.apiUrl + "/funcionarios")
    }
    this.post = (newFuncionario) => {
        return $http.post(config.apiUrl + "/funcionarios", newFuncionario)
    }
    
    this.delete = (funcionarioId) => {
        return $http.delete(config.apiUrl + "/funcionarios/" + funcionarioId)
    }

    this.getFuncId = (funcionarioId) => {
        return $http.get(config.apiUrl + "/funcionarios/" + funcionarioId)
    }
})