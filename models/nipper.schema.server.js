var mongoose = require('mongoose');
var NipperSchema = mongoose.Schema({
    name: String,
    artist:String,
    address:String,
    path: String

    },{collection: 'statues'});

module.exports = NipperSchema;