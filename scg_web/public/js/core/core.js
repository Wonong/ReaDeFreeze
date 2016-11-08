var app = angular.module('mainApp', [
    'ngRoute'
]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        redirectTo: '/timeline'
    }).when('/timeline', {
        templateUrl: 'views/timeline3.html'
    }).when('/link', {
        templateUrl: 'views/link.html'
    }).when('/update', {
        templateUrl: 'views/update.html'
    }).otherwise({
        redirectTo: '/timeline'
    });
});