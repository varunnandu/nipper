module.exports = function (app, model) {
    var q = require('q');
    app.get("/api/nipper/statues", getAllStatues);
    app.get("/api/nippers/:name", getNipperByName);
    app.get("/api/nipper/:id", getNipperById);

    var nippermodel = require('../models/nipper.model.server');
    
    function getAllStatues(req, res) {
        nippermodel
            .findAllStatues()
            .then(
                function (statues) {
                    console.log(statues);
                     res.json(statues);
                },
                function (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
            );
    }

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