var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var heroSchema = new Schema({
    name: {type: String, required: true},
    power: {type: String, required: true},
    status: {type: Boolean, default: true, required: true},
    _likes: [{type: Schema.Types.ObjectId, ref: 'Like'}]
},  {timestamps: true });
mongoose.model('Hero', heroSchema);