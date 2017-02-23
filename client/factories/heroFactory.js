app.factory('heroFactory', function ($http, $location) {
    var factory = {};
    factory.createhero = function (hero) {
        // console.log(hero);
        $http.post('/createhero', hero).then(function(output){
            if(output.data.error){
                alert(output.data.error)
            }
            else{
                $location.url('/dashboard')
            }
        });
    }
    factory.get_all = function(callback){
        $http.get('/allhero').then(function(output){
            if(output.data.error){
                alert(output.data.error);
            }
            else{
                callback(output);
            }
        })
    }
    factory.changestatus = function(id, callback){
        var __id = {_id: id}
        // console.log(__id, "here");
        $http.post('/status', __id).then(function(output){
            if(output.data.error){
                alert(output.data.error);
            }
            else{
                callback();
            }
        })
    }
    return factory;
});