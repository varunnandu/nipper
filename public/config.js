(function(){
    angular
        .module("Nipper")
        .config(configuration);

    function configuration($routeProvider, $locationProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

        $routeProvider
        .when("/", {
            templateUrl: "templates/home.view.client.html",
            controller: "HomeController",
            controllerAs: "model"
        })
        .when("/home", {
            templateUrl: "templates/home.view.client.html",
            controller: "HomeController",
            controllerAs: "model"
            })
            .when("/listAll", {
                templateUrl: "templates/nipper-list-all.view.client.html",
                controller: "NipperController",
                controllerAs: "model"
            })
        .when("/home/nipper/:id", {
            templateUrl: "templates/nipper-details.view.client.html",
            controller: "NipperDetailsController",
            controllerAs: "model"
            })
        .when("/listAll/:result", {
                templateUrl: "templates/nipper-list.view.client.html",
                controller: "NipperController",
                controllerAs: "model"
            });
    }
})();