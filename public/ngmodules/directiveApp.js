/**
 * Created by donovan on 15/10/02.
 */
'use strict';

var app = angular.module("directiveApp",[]);

app.controller("defaultCtrl", function($scope) {
    $scope.todos = [
        { action: "Get groceries", complete: false },
        { action: "Call plumber", complete: false },
        { action: "Buy running shoes", complete: true },
        { action: "Buy flowers", complete: false },
        { action: "Call family", complete: false }];
});