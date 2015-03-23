'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('CategoryCtrl', function ($scope, $routeParams, $http, $location) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.colortiltle = "#00BAD2";
  $scope.category = $routeParams.category;
  $http.get('data/events.json').
    success(function(data, status, headers, config) {
    var eventlist = data;
    var eventsfiltered =$(eventlist).filter(function (i,n){return n.category === $routeParams.category;});
    if(eventsfiltered.length % 2 != 0)
      eventsfiltered.push("");
    $scope.events= align(eventsfiltered, 2);
  }).
    error(function(data, status, headers, config) {
    // log error
  });

  function align(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }
});
