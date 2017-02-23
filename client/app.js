var app = angular.module('beltApp', ['ngRoute', 'angularMoment']);
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'partials/login.html'
    })
    .when('/dashboard', {
        templateUrl: 'partials/dashboard.html'
    })
    .when('/addhero', {
        templateUrl: 'partials/addhero.html'
    })
    .otherwise({
        redirectTo: '/'
    })
})