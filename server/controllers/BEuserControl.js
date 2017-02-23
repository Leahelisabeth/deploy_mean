var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = (function () {
    return {
        create: function (req, res) {
            console.log(req.body, "be controller")
            User.findOne({ name: req.body.name }, function (err, user) {
                if (!user) {
                    var newUser = new User(req.body);
                    newUser.save(function (err) {
                        if (err) {
                            res.json({ error: "something went wrong, try again please" });
                        }
                        req.session.user = newUser;
                        req.session.save();
                        res.json({ status: true });
                    })
                }
                else {
                    console.log(user)
                    req.session.user = user;
                    req.session.save()
                    res.json({ status: true });
                }
            })
        },
        checkUser: function (req, res) {
            if (!req.session || !req.session.user) {
                res.json(null);
            }
            else {
                res.json(req.session.user);
            }
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
        

    }
})();