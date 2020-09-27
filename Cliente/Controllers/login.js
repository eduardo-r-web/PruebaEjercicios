app.controller("login", function ($scope, $location) {
    $scope.msg = "";
    $scope.usuario = "";
    $scope.clave = "";

    $scope.ingresar = () => {
        if ($scope.usuario == "admin" && $scope.clave == "1234") {
            $scope.$parent.logueado = true;
            $location.url("/ejercicio1");
        } else {
            $scope.msg = "Acceso denegado";
        }
    }
});