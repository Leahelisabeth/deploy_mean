var mongoose = require('mongoose');
var Hero = mongoose.model('Hero');
var User = mongoose.model('User');
var Like = mongoose.model('Like');
module.exports = (function () {
    return {
        toggle: function (req, res) {
            Like.find({}, function (err, data) {
                if (err) {
                    res.json({ error: 'something went wrong' })
                }
                else {
                    for (var i = 0; i < data.length; i++) {
                        if (req.body.user == data[i]._user && req.body.hero == data[i]._hero) {
                            console.log(req.body.user, data[i]._user)
                            console.log("you already liked this")
                            var error = "there was an error"
                            var found = data[i]._id
                            console.log(found);
                        }
                    }
                    if(!error){
                    var newlike = new Like({ _hero: req.body.hero, _user: req.body.user })
                    newlike.save(function (err) {
                        if (err) {
                            res.json({ error: "oh no" })
                        }
                        else {
                            User.findOne({ _id: req.body.user }, function (err, user) {
                                if (err) {
                                    console.log(err);
                                    res.json({error: "ph no"})
                                }
                                else {
                                    user._likes.push(newlike);
                                    user.save();
                                }
                            });
                            Hero.findOne({ _id: req.body.hero }, function (err, hero) {
                                if (err) {
                                    console.log(err);
                                    res.json({error: "ph no"})
                                }
                                else {
                                    hero._likes.push(newlike);
                                    hero.save();
                                }
                            });
                            res.json({ status: true })
                        }
                    });//end of like.save
                }//if !erro
                else {
                    console.log(found, "found")
                    Like.remove({_id: found}, function(err, like){
                        if(err){
                            res.json({error: "there was an error"})
                        }
                        else{
                            // like.save(function(err){
                            Hero.findOne({_id: req.body.hero}, function(err, hero){
                                if(err){
                                    console.log(err)
                                    res.json({error: "ph no"})
                                }
                                else{
                                    hero._likes.remove({_id: found})
                                    hero.save();
                                }
                            });
                            User.findOne({_id: req.body.user}, function(err, user){
                                if(err){
                                    console.log(err)
                                    res.json({error: "ph no"})
                                }
                                else{
                                    user._likes.remove({_id: found})
                                    user.save();
                                }
                            });
                            res.json({status: true});
                        }
                    });
                    
                }
                }
            });//end of like.find
            }//end of toggle
    }//end of return
})();