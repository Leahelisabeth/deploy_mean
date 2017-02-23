var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    name: {type:String, required: true},
    _likes: [{type: Schema.Types.ObjectId, ref: 'Like'}]
},  {timestamps: true });
mongoose.model('User', UserSchema);