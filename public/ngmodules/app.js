angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/checkout", { templateUrl: "views/checkoutSummary.html" })
            .when("/products", { templateUrl: "views/productList.html" })
            .when("/complete", { templateUrl: "views/thankYou.html" })
            .when("/placeorder", { templateUrl: "views/placeOrder.html" })
            .otherwise({ templateUrl: "views/productList.html" })
    });

