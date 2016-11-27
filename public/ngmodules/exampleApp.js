/**
 * Created by donovan on 15/09/29.
 */
'use strict';

var app = angular.module("exampleApp", ["exampleApp.Controllers", "exampleApp.Filters",
    "exampleApp.Services", "exampleApp.Directives"]);

app.constant("startTime", new Date().toLocaleTimeString());

app.config(function(startTime) {
    console.log("Main module config " + startTime);
});

app.run(function(startTime) {
    console.log("Main module run " + startTime);
});

angular.module("exampleApp.Directives", [])
    .directive("highlight", function($filter) {
        var dayFilter = $filter("dayName");
        return function(scope, element, attrs) {
            if (dayFilter(scope.day)==attrs["highlight"]) {
                element.css("color", "red");
            }
        }
    });

var now = new Date().getDay();
app.value("nowValue", now);

angular.module("exampleApp.Services",[])
    .service("days", function(nowValue) {
        this.today = nowValue;
        this.tomorrow = this.today + 1;
    })
    .config(function() {
        console.log("Service module config: (no time)");
    })
    .run(function(startTime) {
        console.log("Service module run " + startTime);
    });


//
// THIS COMMENTED OUT BLOCK BELOW DOES THE SAME AS THE MODULE LAYOUT ABOVE WHERE CODE IS
// SPLIT OUT INTO SEPARATE MODULES.
//
//app.controller("dayCtrl", function($scope, days) {
//    $scope.day = days.today;
//});
//
//app.controller("tomorrowCtrl", function ($scope, days) {
//    $scope.day = days.tomorrow;
//});
//
//app.directive("highlight", function($filter) {
//    var dayFilter = $filter("dayName");
//    return function(scope, element, attrs) {
//        if(dayFilter(scope.day) == attrs["highlight"]) {
//            element.css("color", "red");
//        }
//    }
//});
//
//app.filter("dayName", function() {
//    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    return function(input) {
//        return angular.isNumber(input) ? dayNames[input] : input;
//    };
//});
//
//var now = new Date();
//app.value("nowValue", now);
//
//app.service("days", function(nowValue) {
//    this.today = nowValue.getDay();
//    this.tomorrow = this.today + 1;
//});