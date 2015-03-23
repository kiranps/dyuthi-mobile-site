'use strict';

/**
 * @ngdoc function
 * @name yo2App.controller:WorkshopCtrl
 * @description
 * # WorkshopCtrl
 * Controller of the yo2App
 */
angular.module('yo2App')
  .controller('WorkshopCtrl', function ($scope) {
  $scope.colortiltle = "#00BAD2";
 
  var categorylist = [
    {
      cat:"Sixth Sense Robot",
      color:"#F44336"
    },
    {
      cat:"Bridge Design",
      color:"#E91E63"
    },
    {
      cat:"PCB Making",
      color:"#3F51B5"
    },
    {
      cat:"Social Media Attacks",
      color:"#795548"
    },
    {
      cat:"Express And Radiate",
      color:"#4CAF50"
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
