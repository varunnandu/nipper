var q = require('q');
var mongoose = require('mongoose');
var nipperSchema = require('./nipper.schema.server');
var nipperModel = mongoose.model('NipperModel', nipperSchema); //Connect To Schema.

nipperModel.findStatueByName = findStatueByName;
nipperModel.findAllStatues = findAllStatues;
nipperModel.findNipperById = findNipperById;
module.exports = nipperModel; //Export all the above mentioned functions

/**
 * Returns a promise with all the statues from the database.
 * @returns {*|Promise|PromiseLike<any>}
 */
function findAllStatues() {
    var defer = q.defer();
    nipperModel.find(function (err, data) {
        if(err) {
            defer.reject(err);
        }
        else {
            defer.resolve(data);
        }
    });
    return defer.promise;

}

/**
 *
 * @param Returns a promise with all the statues from the database which are similar to the provided name.
 * @returns {*|Promise|PromiseLike<any>}
 */
function findStatueByName(name) {
    var match = name;

    var defer = q.defer();
    nipperModel.find({'name': {'$regex' :match, '$options': 'i'}}, function (err, data) {
        if(err) {
            defer.reject(err);
        }
        else {
            defer.resolve(data);
        }
    });
    return defer.promise;
}

/**
 * Returns a promise with one statue entry from the database.
 * @param id
 * @returns {*|Promise|PromiseLike<any>}
 */
function findNipperById(id) {
    var defer = q.defer();
    nipperModel.findOne({'_id': id}, function (err, data) {
        if(err) {
            defer.reject(err);
        }
        else {
            defer.resolve(data);
        }
    });
    return defer.promise;

}
