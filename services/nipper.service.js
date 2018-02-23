/**
 * Server Side Service to connect provide interface between database and client side service.
 * @param app
 */


module.exports = function (app) {
    app.get("/api/nipper/statues", getAllStatues);
    app.get("/api/nippers/:name", getNipperByName);
    app.get("/api/nipper/:id", getNipperById);

    var nippermodel = require('../models/nipper.model.server');

    /**
     * Get all statues from the database.
     * @param req
     * @param res
     */
    
    function getAllStatues(req, res) {
        nippermodel
            .findAllStatues()
            .then(
                function (statues) {
                     res.json(statues);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    /**
     * Get all statues by name from the Database.
     * @param req
     * @param res
     */

    function getNipperByName(req,res) {
        var name = req.params['name'];
        nippermodel
            .findStatueByName(name)
            .then(function (status) {
                res.json(status);
            },
            function (err) {
                res.status(400).send(err);

            });

    }

    /**
     * Get A Statue from Database By Id.
     * @param req
     * @param res
     */

    function getNipperById(req,res) {
        var id = req.params['id'];
        nippermodel
            .findNipperById(id)
            .then(function (status) {
                    res.json(status);
                },
                function (err) {
                    res.status(400).send(err);

                });

    }

}