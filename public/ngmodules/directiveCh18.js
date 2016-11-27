/**
 * Created by donovan on 2015/11/17.
 */

'use strict';
angular.module("customDirectives", ["customServices"])
    .directive("triButton", function(logService) {
        return {
            scope : { counter: "=counter"},
            link : function(scope, element, attrs) {
                element.on("click", function(event) {
                    logService.log("Button click: " + event.target.innerText);
                    scope.$apply(function() {
                        scope.counter++;
                    });
                });
            }
        }
    });