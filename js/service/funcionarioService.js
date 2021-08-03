angular.module("projetoTecnico").service("funcionarioService", function(config, $http) {

    this.get = () => {
        return $http.get(config.funUrl + "/funcionarios")
    }
})