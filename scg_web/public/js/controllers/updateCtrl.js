/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('updateCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location) {
    $scope.submit = function(){
        console.log("1");
        $http.post('/updateInfo/',{
            user : 'test123',
            toTime : $scope.toTime,
            device : "Android123",
            mode : $scope.mode
        });
        // $location.path("/#/");
    }
}]);