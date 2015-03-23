'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:ExpoCtrl
 * @description
 * # ExpoCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
.controller('ExpoCtrl', function ($scope) {
  $scope.colortiltle = "#00BAD2";

  var categorylist = [
    {
    cat:"QUINTESSENCE",
    color:"#F44336"
  },
  {
    cat:"RESONANCE",
    color:"#E91E63"
  },
  {
    cat:"PINNACLE",
    color:"#3F51B5"
  },
  {
    cat:"NIRMAAN",
    color:"#795548"
  },
  {
    cat:"INSIGNIA",
    color:"#4CAF50"
  },
  {
    cat:"DE ARQUITECTURA",
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
