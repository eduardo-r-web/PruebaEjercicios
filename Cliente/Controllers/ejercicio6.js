app.controller("ejercicio6", function ($scope, $http) {
    $scope.nombre = "";
    $scope.nombreJugador1 = "";
    $scope.nombreJugador2 = "";
    $scope.partida;
    $scope.idPartida;
    $scope.numeroJugador;
    $scope.filaSeleccionada;
    $scope.columnaSeleccionada;
    $scope.tablero;
    $scope.turno;
    $scope.resultado = "";
    $scope.jugando = false;
  
    

    $scope.unirseApartida = function () {
        let esperar = true;
        $http.post('http://localhost:57553/api/Partida/Iniciar?jugador=' + $scope.nombre)
            .then((response) => {
                $scope.idPartida = response.data.IdPartida;
                $scope.numeroJugador = response.data.NumeroJugador;
                //si el usuario tiene el numero de jugador 1, se deja en espera hasta que llegue el segundo jugador
                if ($scope.numeroJugador == 1) {
                    let esperandoRival = setInterval(function(){
                        $scope.resultado = "Esperando rival...";
                            $http.get('http://localhost:57553/api/Partida/' + $scope.idPartida).then(function (response) {
                                $scope.partida = response.data;
                                $scope.nombreJugador1 = $scope.partida.Jugador1;
                                $scope.nombreJugador2 = $scope.partida.Jugador2;
                                $scope.turno = $scope.partida.Turno;
                                $scope.tablero = $scope.partida.Tablero;
                                if ($scope.partida.Jugador2 != null) {
                                    esperar = false;
                                }
                            });
                        if (!esperar) {
                            clearInterval(esperandoRival);
                            $scope.resultado = "";
                            comenzarAjugar();
                        }
                    }, 1000);

                } else if ($scope.numeroJugador == 2) {
                    $http.get('http://localhost:57553/api/Partida/' + $scope.idPartida).then(function (response) {
                        $scope.partida = response.data;
                        $scope.nombreJugador1 = $scope.partida.Jugador1;
                        $scope.nombreJugador2 = $scope.partida.Jugador2;
                        $scope.turno = $scope.partida.Turno;
                        $scope.tablero = $scope.partida.Tablero;
                        
                    });
                    comenzarAjugar();
                }
            }).catch((err) => {});
    }

    function comenzarAjugar() {
        $scope.jugando = true;
    }

    $scope.jugar = function() {
        
        let esperandoTurno = setInterval(function () {
            if ($scope.jugando) {
                $http.get('http://localhost:57553/api/Partida/' + $scope.idPartida)
                    .then(function (response) {
                        $scope.partida = response.data;
                        $scope.tablero = response.data.Tablero;
                        $scope.turno = response.data.Turno;
                        hayGanador($scope.idPartida);
                    }).catch(function (err) {
                        console.log(JSON.stringify(err));
                    });
            }
        }, 700);
        
    }
       
    $scope.enviarJugada = function () {
        
        if ($scope.jugando) {
            if ($scope.tablero[$scope.filaSeleccionada][$scope.columnaSeleccionada] == 0) {
                if ($scope.numeroJugador == $scope.turno) {
                    $scope.jugada = {
                        IdPartida: $scope.idPartida,
                        Fila: $scope.filaSeleccionada,
                        Columna: $scope.columnaSeleccionada,
                        NumeroJugador: $scope.numeroJugador
                    }
                    $http.post('http://localhost:57553/api/Partida/Jugar', $scope.jugada).then(function (response) {
                        $scope.turno = response.data.Turno;
                        $scope.resultado = "";
                    });
                } else
                    $scope.resultado = "El rival aún no juega";
            } else
                $scope.resultado = "Esa casilla ya fue seleccionada";
        } else
            $scope.resultado = "Debe iniciar una partida";
    }
    
    function hayGanador(idPartida) {
        $http.get('http://localhost:57553/api/Partida/ganador/' + idPartida).then(function (res) {
            if (res.data.Resultado == 1) {
                $scope.resultado = "Gana el jugador 1";
                $scope.jugando = false;
            } else if (res.data.Resultado == 2) {
                $scope.resultado = "Gana el jugador 2";
                $scope.jugando = false;
            } else if (res.data.Resultado == 3) {
                $scope.resultado = "Nadie gana";
                $scope.jugando = false;
            }
        });
    }
});