/**
 * Created by donovan on 15/09/28.
 */

'use strict';

angular.module("sportsStoreAdmin", [ "ngRoute", "ngResource" ])
    .config(function($routeProvider) {
        $routeProvider
            .when("/login", { templateUrl: "views/adminLogin.html" })
            .when("/main", { templateUrl: "views/adminMain.html" })
            .otherwise({ redirectTo : "/login" })
    });
