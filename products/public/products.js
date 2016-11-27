/**
 * Created by donovan on 2015/11/23.
 */

'use strict';

angular.module('productsApp', ['increment', 'ngResource'])
    .config(function($logProvider) {
        $logProvider.debugEnabled(false);
    })
    .constant("baseUrl", "http://localhost:5500/products/")
    .controller('productsCtrl', function($scope, $http, $log, $resource, baseUrl) {
        $scope.displayMode = 'list';
        $scope.currentProduct = null;
        $scope.productsResource = $resource(baseUrl + ":id", { id: "@id"});

        $scope.listProducts = function() {
            //$http.get(baseUrl).then(function(resp) {
            //    $log.debug(resp.status);
            //    $scope.products = resp.data;
            //}, function(errResp) {
            //    $log.error(errResp);
            //})
            $scope.products = $scope.productsResource.query();
        };

        $scope.deleteProduct =  function(product) {
            //$http.delete(baseUrl + product.id).then(function(resp) {
            //    $log.debug(resp);
            //    $scope.products.splice($scope.products.indexOf(product), 1);
            //}, function(errResp) {
            //    $log.error(resp);
            //})
            product.$delete().then(function() {
                $scope.products.splice($scope.products.indexOf(product), 1);
            });
            $scope.displayMode = "list";
        };

        $scope.createProduct = function(product) {
            //$http.post(baseUrl, product).then(function(resp) {
            //    $scope.products.push(resp.data);
            //}, function(errResp) {
            //    $log.error(errResp);
            //});
            //$scope.displayMode = 'list';
            new $scope.productsResource(product).$save().then(function(newProduct) {
                $scope.products.push(newProduct)
                $scope.displayMode = 'list';
            })
        };

        $scope.updateProduct = function(product) {
            //$http.put(baseUrl, product).then(function(resp) {
            //    for (var i=0; i<$scope.products.length; i++) {
            //        if ($scope.products[i].id==resp.data.id) {
            //            $scope.products[i] = resp.data;
            //            break;
            //        }
            //    }
            //}, function(errResp) {
            //    $log.error(errResp);
            //});
            //$scope.displayMode = 'list';
            product.$save();
            $scope.displayMode = "list";
        };

        $scope.editOrCreateProduct = function(product) {
            //$scope.currentProduct = product ? angular.copy(product) : {};
            $scope.currentProduct = product ? product : {};
            $scope.displayMode = 'edit';
        };

        $scope.saveEdit = function(product) {
            if (angular.isDefined(product.id)) {
                $scope.updateProduct(product);
            } else {
                $scope.createProduct(product);
            }
        };

        $scope.cancelEdit = function() {
            //$scope.currentProduct = {};
            //$scope.displayMode = 'list';
            if ($scope.currentProduct && $scope.currentProduct.$get) {
                $scope.currentProduct.$get();
            }
            $scope.currentProduct = {};
            $scope.displayMode = 'list';
        };

        $scope.listProducts();

    });