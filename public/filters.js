/**
 * Created by donovan on 15/09/30.
 */
'use strict';

angular.module("exampleApp.Filters", [])
    .filter("dayName", function() {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];
        return function (input) {
            return angular.isNumber(input) ? dayNames[input] : input;
        };
    });