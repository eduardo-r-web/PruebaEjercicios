app.controller("ejercicio3", function ($scope, $uibModal, $http) {
    $scope.Productos = [];

    $scope.importar = () => {
        $http.get('https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json').then((response) => {
            $scope.bd = response.data;
        });
    }

    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }

    $scope.verDetalle = function (id) {
        id--;
        $scope.Productos = [
            $scope.bd.value[id].ProductID,
            $scope.bd.value[id].ProductName,
            $scope.bd.value[id].SupplierID,
            $scope.bd.value[id].CategoryID,
            $scope.bd.value[id].QuantityPerUnit,
            $scope.bd.value[id].UnitPrice,
            $scope.bd.value[id].UnitsInStock,
            $scope.bd.value[id].UnitsOnOrder,
            $scope.bd.value[id].ReorderLevel,
            $scope.bd.value[id].Discontinued
        ];
        console.table($scope.Productos);
    }

    $scope.open = function (size) {
        let modalInstance = $uibModal.open({
            animation: true,
            templateUrl: '../Views/ventanaModal.html',
            controller: 'modal',
            size: size,
            resolve: {
                productos: function () {
                    return $scope.Productos;
                }
            }
        });
        modalInstance.result.then(function () {
            console.log("Dialog dismissed");
        });
    };

    $scope.importar();
});