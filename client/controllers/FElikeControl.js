app.controller('likeControl', function ($scope, likeFactory, heroFactory) {
    $scope.newlike = {};
    $scope.like = function(user, hero){
        $scope.newlike.user = user;
        $scope.newlike.hero = hero;
        likeFactory.add_like($scope.newlike);
    }
});