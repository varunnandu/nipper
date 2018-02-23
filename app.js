/**
 * Code to connect with back end.
 * @param app
 */

module.exports = function (app) {

    var niperModel = require('./models/nipper.model.server');
    var model = {niperModel: niperModel};
    require('./services/nipper.service')(app, model);
    var connectionString = 'mongodb://127.0.0.1:27017/nipper';

    if(process.env.MLAB_USERNAME) {
        connectionString = process.env.MLAB_USERNAME + ":" +
            process.env.MLAB_PASSWORD + "@" +
            process.env.MLAB_HOST + ':' +
            process.env.MLAB_PORT + '/' +
            process.env.MLAB_APP_NAME;
    }


    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

};