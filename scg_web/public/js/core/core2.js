var app = angular.module('mainApp', [
    'ngRoute'
]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        redirectTo: '/login'
    }).when('/login', {
        controller: 'loginCtrl',
        templateUrl: '/views/login.html'
    }).when('/signup', {
        controller: 'loginCtrl',
        templateUrl: '/views/signup.html'
    }).otherwise({
        redirectTo: '/'
    });
});