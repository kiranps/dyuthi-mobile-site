'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('DetailsCtrl', function ($scope, $routeParams, $http, $location) {
  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.category = $routeParams.category;


  $http.get('data/events.json').
    success(function(data, status, headers, config) {
    $scope.events = $(data).filter(function (i,n){return n.event_name === $routeParams.event;});
  }).
    error(function(data, status, headers, config) {
    // log error
  });
});
