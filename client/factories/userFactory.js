app.factory('userFactory', function ($http, $location) {
    var factory = {};
    factory.createUser = function (user) {
        // console.log(user);
        $http.post('/createuser', user).then(function(output){
            if(output.data){
                $location.url('/dashboard')
            }
        })
    }
    factory.checkUser = function (callback) {
        $http.get('/checkuser').then(function (output) {
            if (!output.data) {
                $location.url('/');
            }
            else {
                callback(output.data);
            }
        });
    }
    return factory;
});