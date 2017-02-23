var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var LikeSchema = new Schema({
    _hero: {type: Schema.Types.ObjectId, ref: 'Hero'},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
},  {timestamps: true });
mongoose.model('Like', LikeSchema);