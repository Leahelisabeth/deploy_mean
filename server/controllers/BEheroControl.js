var mongoose = require('mongoose');
var Hero = mongoose.model('Hero');
module.exports = (function () {
    return {
        create: function (req, res) {

            var newhero = new Hero({ name: req.body.name, power: req.body.power });
            newhero.save(function (err) {
                if (err) {
                    res.json({ error: "something went wrong adding your hero, you either did not input a name or power, please add the required fields and try again" });
                }
                else {
                    console.log(newhero);
                    res.json({ status: true })
                }
            })
        },
        get_hero: function (req, res) {
            Hero.find({})
            .populate('_likes')
            .exec(function (err, heroes) {
                if (err) {
                    res.json({ error: "something went wrong loading the heroes" });
                }
                else {
                    var all = [];
                    var actives = [];
                    var deactives = [];
                    for (var i = 0; i < heroes.length; i++) {
                        if (heroes[i].status == true) {
                            actives.push(heroes[i]);
                        }
                        else {
                            deactives.push(heroes[i]);
                        }
                    }
                    all.push(actives);
                    all.push(deactives);
                    res.json(all);
                }
            });
        },
        change: function (req, res) {
            Hero.findOne({ _id: req.body._id }, function (err, hero) {
                if (err) {
                    res.json({ error: 'could not find hero matching request' })
                }
                else {
                    if (hero.status == true) {
                        hero.status = false;
                        hero.save(function (err) {
                            if (err) {
                                res.json({ error: "somethign went wrong saving your hero" })
                            }
                            else {
                                res.json({ status: true })
                            }
                        });
                    }
                    else {
                        if (hero.status == false) {
                            hero.status = true;
                            hero.save(function (err) {
                                if (err) {
                                    res.json({ error: "something went wrong saving your hero" })
                                }
                                else {
                                    res.json({ status: true })
                                }
                            });
                        }
                    }
                }
            });
        }
    }
})();