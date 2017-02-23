app.controller('heroControl', function ($scope, heroFactory) {
    console.log("hero factory");
    $scope.active = [];
    $scope.nonactive = [];
    $scope.errors = [];
    $scope.add_hero = function () {
        $scope.errors = [];
        if (!$scope.newhero | !$scope.newhero.name) {
            $scope.errors.push("Please input a name for your hero")
        }
        else if ($scope.newhero.name.length < 3) {
            $scope.errors.push("Please add more characters in name field")
        }
        else if (!$scope.newhero.power) {
            $scope.errors.push("Please input a power for your hero")
        }
        else if ($scope.newhero.power.length < 3) {
            $scope.errors.push("Please add more characters in power field")
        }
        
        else {
            heroFactory.createhero($scope.newhero, function () {
                // console.log("adding");

            });
        }

    }
    function get_hero() {
        heroFactory.get_all(function (data) {
            $scope.all_heroes = data;
        })
    }
    get_hero();
    $scope.status = function (id) {
        // console.log(id);
        heroFactory.changestatus(id, get_hero);
    }
});