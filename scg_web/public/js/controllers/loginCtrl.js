
app.controller('loginCtrl', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.sessionCheck = function(){
        $http.get('/users/getSession').then(function(data) {
            console.log("get session");
            $scope.session = data.data;
        });
        if($scope.session) {
            console.log("session exist");
            $window.location.href= "/#/timeline";
        }
    }

    $scope.insert = function(){
        var data = {};
        console.log($scope);
        data.userId = $scope.userId;
        data.password = $scope.password;
        data.tizenId = 'NULL';
        $http.post('/users',data).success(function(data) {
            console.log("insert2");
            if(data.idConflict)
                alert("아이디가 중복 됩니다.");
            else {
                alert("ID: "+ $scope.user+ " PW: "+ $scope.password+" 성공!");
                $scope.session = data;
                $window.location.href= "/#/timeline";
            }
        });
    }

    $scope.login = function(){
        var data = {};
        data.userId = $scope.userId;
        data.password = $scope.password;
        $http.post('/users/login',data).success(function(data) {
            if(data) {
                alert("Login Success!!");
                $scope.session = data;
                $window.location.href = '/#/timeline';
            }
            else
                alert("Login Failed!!");
        });
    }

    $scope.logout = function(){
        $http.get('/users/logout').success(function(data) {
            $scope.session = null;
        });
    }
}]);