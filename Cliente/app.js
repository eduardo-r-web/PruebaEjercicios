const app = angular.module("practica", ['ngRoute', 'ui.bootstrap', 'ngAnimate']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/ejercicio1", {
            templateUrl: "Views/ejercicio1.html",
        })
        .when("/ejercicio2", {
            templateUrl: "Views/ejercicio2.html",
        })
        .when("/ejercicio3", {
            templateUrl: "Views/ejercicio3.html",
        })
        .when("/ejercicio4", {
            templateUrl: "Views/ejercicio4.html",
        })
        .when("/ejercicio5", {
            templateUrl: "Views/ejercicio5.html",
        })
        .when("/ejercicio6", {
            templateUrl: "Views/ejercicio6.html",
        })
        .when("/login", {
            templateUrl: "Views/login.html",
            controller: "login"
        })
        .when("/logout", {
            templateUrl: "Views/logout.html",
            controller: "logout"
        });
});