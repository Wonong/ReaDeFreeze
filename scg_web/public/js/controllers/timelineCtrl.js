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
}]);
