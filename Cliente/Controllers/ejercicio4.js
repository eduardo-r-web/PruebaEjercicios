app.controller("ejercicio4", function ($scope, $http, $timeout) {
    $scope.jugador = {};
    $scope.nombreJugador1 = "";
    $scope.nombreJugador2 = "";
    $scope.nombreGanador = "";
    $scope.resultado = "";
    $scope.aux;

    $scope.enviar = function () {
        $http.post("http://localhost:57553/api/jugador", $scope.jugador)
            .then(function (response) {
                console.dir(response);
                $scope.resultado = "Esperando rival... ";
            })
            .catch(function (err) {
                $scope.resultado = "Error al enviar datos: " + JSON.stringify(err);
            });

        $timeout(function () {
            $http.get("http://localhost:57553/api/jugador")
                .then(function (response) {
                    console.dir(response);
                    $scope.aux = response.data;
                    $scope.resultado = "";
                }).catch(function (err) {
                    console.dir( "error" + err);
                });
        }, 10000);
    }

   

});