(function () {
    angular
        .module("Nipper")
        .controller("NipperController", NipperController)
    
    function NipperController(NipperService,$routeParams) {
        var vm = this;
        vm.propertyName = null;
        vm.reverse = true;
        var searchText = $routeParams['result'];

        vm.sortBy = sortBy;
        vm.getAllStatues = getAllStatues;


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

        function sortBy(propertyName) {
            vm.reverse = (vm.propertyName === propertyName) ? !vm.reverse : false;
            vm.propertyName = propertyName;

        }


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