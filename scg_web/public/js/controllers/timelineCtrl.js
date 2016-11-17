/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('timelineCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', function($scope, $http, $routeParams, $rootScope) {

    $scope.initList = function(){
        $http({
            url: '/timeline/list',
            method: "GET"
        }).success(function (data) {
            $scope.timelineList = data;
        });
    };

    $scope.sessionCheck = function(){
        $http.get('/users/getSession').then(function(data) {
            $scope.session = data.data;
        });
        if($scope.session) $location.path("/#/timeline");
    }

}]);
