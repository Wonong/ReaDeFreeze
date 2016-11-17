/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('updateCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location) {
    $scope.submit = function(){
        $http.post('/updateInfo/',{
            user : 'test123',
            device : "Android123",
            mode : $scope.mode,
            toTime : $scope.toTime
        });
        $location.path("/#/");
    }
}]);