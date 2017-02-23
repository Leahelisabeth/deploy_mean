app.factory('likeFactory', function ($http, $location, $route) {
    var factory = {};
    factory.add_like = function(like, callback){
        console.log(like);
        $http.post('/addlike', like).then(function(output){
            if(output.data.error){
                alert(output.data.error);
            }
            else{
                $route.reload();
            }
        })
    }
    return factory;
});