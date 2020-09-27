app.controller("ejercicio1", function ($scope) {
    $scope.nombre1 = "";
    $scope.nombre2 = "";
    $scope.eleccionJugador1 = 0;
    $scope.eleccionJugador2 = 0;
    $scope.resEstrategia = "";
    $scope.res = "";
    $scope.btnActivo1 = [false, false, false, false, false];
    $scope.btnActivo2 = [false, false, false, false, false];

    $scope.reset = function () {
        $scope.nombre1 = "";
        $scope.nombre2 = "";
        $scope.eleccionJugador1 = 0;
        $scope.eleccionJugador2 = 0;
        $scope.resEstrategia = "";
        $scope.res = "";
        $scope.btnActivo1 = [false, false, false, false, false];
        $scope.btnActivo2 = [false, false, false, false, false];
    }

    $scope.ganador = function () {
        let e1 = $scope.eleccionJugador1;
        let e2 = $scope.eleccionJugador2;
        let gana;

        if (e1 == e2) {
            gana = 0;
        }else if (e1 == 1 && (e2 == 2 || e2 == 5)) {
            gana = 1;
        } else if (e1 == 2 && (e2 == 4 || e2 == 3)) {
            gana = 1;
        } else if (e1 == 3 && (e2 == 1 || e2 == 4)) {
            gana = 1;
        } else if (e1 == 4 && (e2 == 5 || e2 == 1)) {
            gana = 1;
        } else if (e1 == 5 && (e2 == 3 || e2 == 2)) {
            gana = 1;
        } else {
            gana = 2;
        }
        return gana;
    }

    $scope.compararEstrategias = function () {
        let e1 = $scope.eleccionJugador1;
        let e2 = $scope.eleccionJugador2;

        if (e1 == 1 && e2 == 2 || e1 == 2 && e2 == 1) {
            $scope.resEstrategia = 'Roca aplasta a Lagarto';
        } else if (e1 == 1 && e2 == 5 || e1 == 5 && e2 == 1) {
            $scope.resEstrategia = 'Roca aplasta Tijeras';
        } else if (e1 == 2 && e2 == 4 || e1 == 4 && e2 == 2) {
            $scope.resEstrategia = 'Lagarto envenena a Spock';
        } else if (e1 == 2 && e2 == 3 || e1 == 3 && e2 == 2) {
            $scope.resEstrategia = 'Lagarto come papel';
        } else if (e1 == 3 && e2 == 1 || e1 == 1 && e2 == 3) {
            $scope.resEstrategia = 'Papel cubre Roca';
        } else if (e1 == 3 && e2 == 4 || e1 == 4 && e2 == 3) {
            $scope.resEstrategia = 'Papel refuta a Spock';
        } else if (e1 == 4 && e2 == 5 || e1 == 5 && e2 == 4) {
            $scope.resEstrategia = 'Spock rompe Tijeras';
        } else if (e1 == 4 && e2 == 1 || e1 == 1 && e2 == 4) {
            $scope.resEstrategia = 'Spock vaporiza Roca';
        } else if (e1 == 5 && e2 == 3 || e1 == 3 && e2 == 5) {
            $scope.resEstrategia = 'Tijeras corta Papel';
        } else if (e1 == 5 && e2 == 2 || e1 == 2 && e2 == 5) {
            $scope.resEstrategia = 'Tijeras decapita a lagarto';
        }
    }

    $scope.jugar = function () {
        if ($scope.eleccionJugador1 != 0 && $scope.eleccionJugador2 != 0) {
            if ($scope.nombre1 != "" && $scope.nombre2 != "") {
                if ($scope.ganador() == 1) {
                    $scope.res = "Gana: " + $scope.nombre1;
                } else if ($scope.ganador() == 2) {
                    $scope.res = "Gana: " + $scope.nombre2;
                } else {
                    $scope.res = "Hay empate";
                }
                $scope.compararEstrategias();
            } else {
                $scope.res = "Campos requeridos";
            }
        } else {
            $scope.res = "Debe seleccionar la estrategia";
        }
    }

    $scope.activar1 = function () {
        $scope.btnActivo1 = $scope.asignarActivo($scope.eleccionJugador1);
    }

    $scope.activar2 = function () {
        $scope.btnActivo2 = $scope.asignarActivo($scope.eleccionJugador2);
    }

    $scope.asignarActivo = function (eleccionJugador) {
        btnActivo = [];
        if (eleccionJugador == 1) {
            btnActivo = [true, false, false, false, false];
        } else if (eleccionJugador == 2) {
            btnActivo = [false, true, false, false, false];
        } else if (eleccionJugador == 3) {
            btnActivo = [false, false, true, false, false];
        } else if (eleccionJugador == 4) {
            btnActivo = [false, false, false, true, false];
        } else if (eleccionJugador == 5) {
            btnActivo = [false, false, false, false, true];
        } else {
            btnActivo = [false, false, false, false, false];
        }
        return btnActivo;
    }


});