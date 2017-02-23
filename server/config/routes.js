var users = require('./../controllers/BEuserControl.js');
var hero = require('./../controllers/BEheroControl.js');
var like = require('./../controllers/BElikeControl.js');
module.exports = function (app) {
    app.post('/additem', function (req, res) {
        // console.log(req.body);
        products.additem(req, res);
    });
    app.get('/products', function (req, res) {
        products.showProd(req, res);
    });
    app.post('/createuser', function (req, res) {
        // console.log(req.body)
        users.create(req, res);
    });
    app.get('/checkuser', function (req, res) {
        users.checkUser(req, res);
    });
    app.get('/logout', function (req, res) {
        users.logout(req, res);
    });
    app.post('/createhero', function(req, res){
        hero.create(req, res);
    });
    app.get('/allhero', function(req, res){
        hero.get_hero(req, res);
    });
    app.post('/status', function(req, res){
        hero.change(req ,res);
    });
    app.post('/addlike', function(req, res){
        like.toggle(req, res);
    });
}