(function () {
    angular
        .module("Nipper")
        .controller("NipperDetailsController", NipperDetailsController)

    function NipperDetailsController(NipperService,$routeParams) {
        var vm = this;
        var searchId = $routeParams['id'];


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