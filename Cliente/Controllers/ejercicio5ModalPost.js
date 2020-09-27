app.controller('modalPost', function ($scope, $uibModalInstance, $http) {
    $scope.producto = {};
    $scope.category = [
        { CategoryId : 1, CategoryName : "Beverages" },
        { CategoryId : 2, CategoryName : "Condiments" },
        { CategoryId : 3, CategoryName : "Confections" },
        { CategoryId : 4, CategoryName : "Dairy Products" },
        { CategoryId : 5, CategoryName : "Grains/Cereal" },
        { CategoryId : 6, CategoryName : "Meat/Poultry" },
        { CategoryId : 7, CategoryName : "Produce" },
        { CategoryId : 8, CategoryName : "Seafood" }
    ];

    $scope.supplier = [
        { SupplierId: 1, CompanyName: "Exotic Liquids" },
        { SupplierId: 2, CompanyName: "New Orleans" },
        { SupplierId: 3, CompanyName: "Grandma Kelly's Homestead" },
        { SupplierId: 4, CompanyName: "Tokio Traders" },
        { SupplierId: 5, CompanyName: "Cooperativa de quesos" },
        { SupplierId: 6, CompanyName: "Mayumi's" },
        { SupplierId: 7, CompanyName: "Pavlova Ltd" },
        { SupplierId: 8, CompanyName: "Specialty Biscuits" },
        { SupplierId: 9, CompanyName: "PB Knackebrod AB" },
        { SupplierId: 10, CompanyName: "Refrescos Americanas" },
        { SupplierId: 11, CompanyName: "Heli subwaren" },
        { SupplierId: 12, CompanyName: "Plutzer" },
        { SupplierId: 13, CompanyName: "Nord-Ost-fisch" },
        { SupplierId: 14, CompanyName: "Formaggi" },
        { SupplierId: 15, CompanyName: "Norske" },
        { SupplierId: 16, CompanyName: "Bigfoot Breweries" },
        { SupplierId: 17, CompanyName: "Svensk" },
        { SupplierId: 18, CompanyName: "Aux Joyeux" },
        { SupplierId: 19, CompanyName: "New England Seafood" },
        { SupplierId: 20, CompanyName: "Leka Trading" },
        { SupplierId: 21, CompanyName: "Lingbysild" },
        { SupplierId: 22, CompanyName: "Zaanse Snoepfabriek" },
        { SupplierId: 23, CompanyName: "Karkky" },
        { SupplierId: 24, CompanyName: "G'day. Mate" },
        { SupplierId: 25, CompanyName: "Ma Maison" },
        { SupplierId: 26, CompanyName: "Pasta Butini" },
        { SupplierId: 27, CompanyName: "Escargots Nouveaux" },
        { SupplierId: 28, CompanyName: "Gai Paturage" },
        { SupplierId: 29, CompanyName: "Forets erables" }

    ];

    $scope.agregar = function () {
        $http.post('http://localhost:57553/api/products', $scope.producto)
            .then(function (response) {
            }).catch(function (err) {
                console.log("error al enviar post: " + err);
            });
        $uibModalInstance.close();
    };

    $scope.cancelar = function () {
        $uibModalInstance.dismiss('cancelo');
    };
});