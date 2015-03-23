'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('EventsCtrl', function ($scope, $location) {

  $scope.go = function ( path ) {
    $location.path( path );
  };

  $scope.colortiltle = "#00BAD2";

  var categorylist = [
    {
      cat:"General",
      color:"#F44336"
    },
    {
      cat:"Cultural",
      color:"#E91E63"
    },
    {
      cat:"Coding",
      color:"#3F51B5"
    },
    {
      cat:"Robotics",
      color:"#795548"
    },
    {
      cat:"Circuits",
      color:"#4CAF50"
    },
    {
      cat:"Chemical",
      color:"#607D8B"
    },
    {
      cat:"Circuits",
      color:"#FF9800"
    },
    {
      cat:"Mechanical",
      color:"#E91E63"
    },
    {
      cat:"Architecture",
      color:"#673AB7"
    },
    {
      cat:"Gaming",
      color:"#00BCD4"
    },
    {
      cat:"Production",
      color:"#009688"
    },
    {
      cat:"",
      color:"#9E9E9E"
    }
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
