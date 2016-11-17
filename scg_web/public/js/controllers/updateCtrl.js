/**
 * Created by Administrator on 2016-11-08.
 */

app.controller('updateCtrl',['$scope', '$http' ,'$routeParams', '$rootScope', '$location', function($scope, $http, $routeParams, $rootScope, $location) {
    $scope.submit = function(){
        $http.get('/users/getSession').then(function(data) {
            $scope.session = data.data;
            $http.get('/link/' + $scope.session.userId).then(function(data){
                console.log("data4");
                console.log(data);
                if(data.data.tizenId && data.data.tizenId != "NULL"){
                    $http.post('/updateInfo/',{
                        userId : $scope.session.userId,
                        device : "Android",
                        mode : $scope.mode,
                        toTime : $scope.toTime
                    });
                    $location.path("/#timeline");
                }else{
                    alert("먼저 냉장고와 연결을 해주세요");
                    document.getElementsByClassName("pass").html("");
                }
            })

        });
    }
}]);