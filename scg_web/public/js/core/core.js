var app = angular.module('mainApp', [
    'ngRoute'
]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        redirectTo: '/timeline'
    }).when('/timeline', {
        controller : 'timelineCtrl',
        templateUrl: 'views/timeline_db.html'
    }).when('/update', {
        controller: 'updateCtrl',
        templateUrl: 'views/update.html'
    }).otherwise({
        redirectTo: '/'
    });
});