var express = require('express'),
    app = express(),
    bp = require('body-parser'),
    path = require('path'),
    session = require('express-session');
app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/bower_components')));
app.use(bp.json());
app.use(session({
    secret: 'user secrets',
    resave: false,
    saveUninitialized: true
}));
require('./server/config/mongoose.js')
require('./server/config/routes.js')(app);
app.listen(8000, function(){
    console.log('always listening');
});