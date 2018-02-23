/**
 * Client Side Service to connect provide interface between database and client side service.
 */

(function () {

    angular
        .module("Nipper")
        .factory("NipperService", NipperService);

    /**
     * Object for the Nipper Service.
     * @param $http
     * @returns {{findAllNippers: findAllNippers, findNipperByName: findNipperByName, findNipperById: findNipperById}}
     */


    function NipperService($http) {
        var api = {
            findAllNippers: findAllNippers,
            findNipperByName: findNipperByName,
            findNipperById: findNipperById
        };
        return api;

        /**
         * return response from api Get Request to the Controller
         */
        function findAllNippers() {

            return $http.get("/api/nipper/statues");
        }

        /**
         * return response from api Get Request to the Controller
         * @param name
         */
        function findNipperByName(name) {
            return $http.get("/api/nippers/" + name);
        }

        /**
         * return response from api Get Request to the Controller.
         * @param id
         */

        function findNipperById(id) {

            return $http.get("/api/nipper/"+id);
        }


    }

})();