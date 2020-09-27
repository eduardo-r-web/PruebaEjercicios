app.controller("logout", function ($scope, $location) {
    $scope.cerrarSesion = function () {
        $scope.$parent.logueado = false;
        $location.url("/login");
    }
});