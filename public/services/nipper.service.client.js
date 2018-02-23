(function () {

    angular
        .module("Nipper")
        .factory("NipperService", NipperService);


    function NipperService($http) {
        var api = {
            findAllNippers: findAllNippers,
            findNipperByName: findNipperByName,
            findNipperById: findNipperById
        };
        return api;


        function findAllNippers() {

            return $http.get("/api/nipper/statues");
        }
        function findNipperByName(name) {
            return $http.get("/api/nippers/" + name);
        }

        function findNipperById(id) {

            return $http.get("/api/nipper/"+id);
        }


    }

})();