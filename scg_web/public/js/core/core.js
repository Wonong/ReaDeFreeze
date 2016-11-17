var app = angular.module('mainApp', [
    'ngRoute'
]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        redirectTo: '/login'
    }).when('/timeline', {
        templateUrl: 'views/timeline_db.html'
    }).when('/login', {
        controller: 'loginCtrl',
        templateUrl: 'views/login.html'
    }).when('/signup', {
        controller: 'loginCtrl',
        templateUrl: 'views/signup.html'
    }).when('/update', {
        controller: 'updateCtrl',
        templateUrl: 'views/update.html'
    }).otherwise({
        redirectTo: '/'
    });
});