(function () {
    angular
        .module("Nipper")
        .controller("NipperController", NipperController);

    /**
     * Object loads Information of Statues to the objects.
     * @param NipperService
     * @param $routeParams
     */
    
    function NipperController(NipperService,$routeParams) {
        var vm = this;
        vm.propertyName = null;
        vm.reverse = true;
        var searchText = $routeParams['result'];

        vm.sortBy = sortBy;
        vm.getAllStatues = getAllStatues;

        /**
         * Initialises the object of the function.
         */


        function init() {
            if(searchText){
                var nipers = getStatue(searchText);
                vm.nipers = nipers;

            }
            else{
                var statues = getAllStatues();
                vm.statues = statues;
            }

        }

        init();

        /**
         * Sorting By Property Name.
         * @param propertyName
         */

        function sortBy(propertyName) {
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;

        }

        /**
         * Gets list of statues by Name. Uses Fuzzy Search.
         * @param searchText
         * @returns {Array}
         */

        function getStatue(searchText) {
            var statues = [];
            NipperService
                .findNipperByName(searchText)
                .then(
                    function (response) {
                        response.data.forEach(function (value) {
                            try {
                                statues.push(value);
                            }
                            catch (err) {

                            }

                        });

                    }
                )
            return statues;


        }

        /**
         * Gets List Of All Statues Available,
         * @returns {Array}
         */
        function getAllStatues() {
            var listOfStatues = [];
            NipperService
                .findAllNippers()
                .then(
                    function (response) {
                        response.data.forEach(function (value) {
                            try {
                                listOfStatues.push(value);
                            }
                            catch (err) {

                            }

                        });

                    }
                )
            return listOfStatues;

        }

        
    }
    
})();