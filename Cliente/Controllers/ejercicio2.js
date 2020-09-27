app.controller("ejercicio2", function ($scope) {
    $scope.n;
    $scope.numeros;
    $scope.respuesta;

    $scope.calcular = () => {
        let arreglo = $scope.n.toString(10).split(" ");
        let arregloNumeros = [];
        let max = 0;
        let min = 0;
        arregloNumeros = $scope.conversionAenteros(arreglo);
        if (arregloNumeros.length > 0) {
            for (let i = 0; i < arregloNumeros.length; i++) {
                max += arregloNumeros[i];
            }
            min = max - Math.max(...arregloNumeros);
            max -= Math.min(...arregloNumeros);
        }
        $scope.numeros = "Arreglo: " + arregloNumeros.join();
        $scope.respuesta = "Máximo: " + max + " Mínimo: " + min;
    }

    //convierte los datos de un arreglo a enteros
    $scope.conversionAenteros = (arregloCadena) => {
        let arrNum = [];
        let arr = arregloCadena;
        for (let i = 0; i < arr.length; i++) {
            if (!isNaN(arr[i])) {
                if (arr[i].trim() != "") {
                    console.log(arr[i]);
                    arrNum.push(parseInt(arr[i]));
                }
            }
        }
        return arrNum;
    }
});