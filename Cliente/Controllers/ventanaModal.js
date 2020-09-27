app.controller('modal', function ($scope, $uibModalInstance, productos) {
    $scope.productos = productos;
    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});