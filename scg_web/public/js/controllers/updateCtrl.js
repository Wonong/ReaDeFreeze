/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('updateCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location) {
    $scope.submit = function(){
        $http.get('/users/getSession').then(function(data) {
            $scope.session = data.data;

            $http.post('/updateInfo/',{
                userId : $scope.session.userId,
                device : "Android",
                mode : $scope.mode,
                toTime : $scope.toTime
            });
            $location.path("/#timeline");
        });
    }
}]);