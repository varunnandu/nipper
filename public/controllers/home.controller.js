(function () {
    angular
        .module("Nipper")
        .controller("HomeController", HomeController);

    function HomeController($location) {
        var vm = this;
        function myFunc(event, text)
        {
            if (event.keyCode === 13) {
                $location.url("/listAll/" + text);
            }
        }

        vm.myFunc = myFunc;

    }


})();