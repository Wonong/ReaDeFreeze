/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('updateCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location) {

    $scope.submit = function(){
        $http.post('update/',{
            user : 'test',
            device : 'android',
            toTime : $scope.toTime,
            mode : 1
        });
        $location.path("/#/");
    }
}]);