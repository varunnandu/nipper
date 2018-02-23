module.exports = function (app) {

    var niperModel = require('./models/nipper.model.server');
    var model = {niperModel: niperModel};
    require('./services/nipper.service')(app, model);

    var connectionString = 'mongodb://127.0.0.1:27017/nipper';
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

};