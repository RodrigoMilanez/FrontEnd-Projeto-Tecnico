angular.module("projetoTecnico").service("funcionarioService", function(config, $http) {

    this.get = () => {
        return $http.get(config.apiUrl + "/funcionarios")
    }
    this.post = (newFuncionario) => {
        return $http.post(config.apiUrl + "/funcionarios" , newFuncionario)
    }
    
})