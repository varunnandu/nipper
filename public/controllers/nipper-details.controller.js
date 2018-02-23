(function () {
    angular
        .module("Nipper")
        .controller("NipperDetailsController", NipperDetailsController);

    /**
     * Finds Nipper By Id in the constructor and stores it in the object.
     * @param NipperService
     * @param $routeParams
     * @constructor
     */

    function NipperDetailsController(NipperService,$routeParams) {
        var vm = this;
        var searchId = $routeParams['id'];

        /**
         * Initialising the object of the function.
         */


        function init() {
            NipperService
                .findNipperById(searchId)
                .then(
                    function (response) {
                        var data = response.data;
                        vm.niper = data;
                    }
                );

        }

        init();

    }

})();