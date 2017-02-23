app.controller('userControl', function ($scope, userFactory) {
    // console.log('fe control working')
    // console.log(userFactory)
    $scope.errors = [];
    $scope.curUser = {};
    $scope.all_categs = [];
    userFactory.checkUser(function (data) {
        // console.log(data)
        $scope.curUser = data;
    });
    // function showUsers() {
    //     userFactory.showusers(function (data) {
    //         console.log(data);
    //         $scope.all_users = data;
    //     });
    // }
    // showUsers();
    $scope.addUser = function () {
        $scope.errors = [];

        if (!$scope.user || !$scope.user.name) {
            $scope.errors.push("Please enter a name.");
        }
        else if ($scope.user.name.length < 3) {
            $scope.errors.push("Please add more characters");
        }
        else {
            // console.log($scope.user)
            userFactory.createUser($scope.user);
        }
    }
});