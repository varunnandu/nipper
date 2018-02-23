(function () {
    angular
        .module("Nipper")
        .controller("HomeController", HomeController);

    /**
     * On Enter Key Press Event navigate to Different Page.
     * @param $location
     */

    function HomeController($location) {
        var vm = this;
        function myFunc(event, text)
        {
            /**
             * keyCode === 13 is the code for pressing Enter Key.
             */
            if (event.keyCode === 13) {
                $location.url("/listAll/" + text);
            }
        }

        vm.myFunc = myFunc;

    }


})();