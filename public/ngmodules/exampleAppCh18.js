/**
 * Created by donovan on 2015/11/17.
 */

'use strict';

angular.module("exampleApp", ["customDirectives", "customServices"])
    .config(function (logServiceProvider) {
        logServiceProvider.debugEnabled(true).messageCounterEnabled(true);
    })
    .controller("defaultCtrl", function($scope, logService) {
        $scope.data = {
            cities : ["London", "New York", "Paris"],
            totalClicks : 0
        };

        $scope.$watch('data.totalClicks', function(newVal) {
            logService.log("Total click count: " + newVal);
        })
    });
