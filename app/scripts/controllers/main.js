'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('MainCtrl', function ($scope, $location) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.colortiltle = "#fff";

  var categorylist = [
    {
      cat:"Events",
      color:"#F44336"
    },
    {
      cat:"Online",
      color:"#E91E63"
    },
    {
      cat:"Expo",
      color:"#3F51B5"
    },
    {
      cat:"Workshop",
      color:"#795548"
    },
    {
      cat:"Proshow",
      color:"#4CAF50"
    },
    {
      cat:"Sponsors",
      color:"#FF5722"
    },
    {
      cat:"Contacts",
      color:"#FF9800"
    },
    {
      cat:"",
      color:"#9E9E9E"
    },
  ];

  function align(arr, size) {
    var newArr = [];
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i, i+size));
    }
    return newArr;
  }

  $scope.category = align(categorylist, 2);
});
