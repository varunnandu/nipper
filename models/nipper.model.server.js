var q = require('q');
var mongoose = require('mongoose');
var nipperSchema = require('./nipper.schema.server');
var nipperModel = mongoose.model('NipperModel', nipperSchema);

nipperModel.findStatueByName = findStatueByName;
nipperModel.findAllStatues = findAllStatues;
nipperModel.findNipperById = findNipperById;
module.exports = nipperModel;

function findAllStatues() {
    var defer = q.defer();
    nipperModel.find(function (err, data) {
        if(err) {
            console.log("error");
            defer.reject(err);
        }
        else {
            console.log("Success");
            defer.resolve(data);
        }
    });
    return defer.promise;

}

function findStatueByName(name) {
    var match = name;

    var defer = q.defer();
    nipperModel.find({'name': {'$regex' :match, '$options': 'i'}}, function (err, data) {
        if(err) {
            console.log("error");
            defer.reject(err);
        }
        else {
            console.log(data);
            defer.resolve(data);
        }
    });
    return defer.promise;
}

function findNipperById(id) {
    var defer = q.defer();
    nipperModel.findOne({'_id': id}, function (err, data) {
        if(err) {
            console.log("error");
            defer.reject(err);
        }
        else {
            console.log(data);
            defer.resolve(data);
        }
    });
    return defer.promise;

}
