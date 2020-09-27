app.controller('ejercicio5', function ($scope, $http, $uibModal) {
    $scope.productos;
    $scope.idprod;
    traerTodosLosProductos();

    //funcion para el boton filtrar. llama a los metodos get
    $scope.filtrar = function () {
        if ($scope.idProducto != null && $scope.idProducto > 0) {
            traerProductoPorId();
        } else if ($scope.idProducto == null) {
            traerTodosLosProductos();
        }else
            console.log("valor no valido");
    }


    //post
    $scope.insertarNuevoProducto = function () {
        let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../Views/ejercicio5ModalPost.html',
            controller: 'modalPost'
        });

        modalInstance.result.then(function () {
            console.log("El usuario cerro la ventana");
        });
    }


    //put
    $scope.modificarProducto = function (id) {
        $scope.idprod=id;
        id--;
        $scope.producto = {
                ProductId: $scope.idprod,
                ProductName: $scope.productos[id].ProductName,
                SupplierID: $scope.productos[id].SupplierID ,
                CategoryID: $scope.productos[id].CategoryID ,
                QuantityPerUnit: $scope.productos[id].QuantityPerUnit,
                UnitPrice: $scope.productos[id].UnitPrice,
                UnitsInStock: $scope.productos[id].UnitsInStock,
                UnitsOnOrder: $scope.productos[id].UnitsOnOrder,
                ReorderLevel: $scope.productos[id].ReorderLevel,
                Discontinued: $scope.productos[id].Discontinued
        }

        let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../Views/ejercicio5ModalPut.html',
            controller: 'modalPut',
            resolve: {
                producto : function () {
                    return $scope.producto;
                }
            }
        });

        modalInstance.result.then(function (result) {
            console.dir(result); 
            $http.put('http://localhost:57553/api/products', result)
                .then(function (response) {
                    console.log("Producto Modificado");
                }).catch(function (err) {
                    console.log("error al enviar put: " + JSON.stringify(err));
                });
        },function () {
            console.log("Dialog dismissed");
        });
    }

    //get
    function traerTodosLosProductos() {
        $http.get('http://localhost:57553/api/products')
            .then(function (response) {
                $scope.productos = response.data;
            }).catch(function (err) {
                console.log("se presento el siguiente error en el get" + err);
            });
    }

    function traerProductoPorId() {
        $http.get('http://localhost:57553/api/products/' + $scope.idProducto)
            .then(function (response) {
                console.dir(response);
                $scope.productos = response.data;
            }).catch(function (err) {
                console.log("se presento el siguiente error en el get" + err);
            });
    }
});