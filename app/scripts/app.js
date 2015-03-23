'use strict';

/**
 * @ngdoc overview
 * @name yo2App
 * @description
 * # yo2App
 *
 * Main module of the application.
 */
angular
.module('yo2App', [
  //'ngAnimate',
  //'ngCookies',
  //'ngResource',
  'ngRoute',
  //'ngSanitize',
  'ngTouch'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/Events', {
    templateUrl: 'views/events.html',
    controller: 'EventsCtrl'
  })
  .when('/Events/:category', {
    templateUrl: 'views/category.html',
    controller: 'CategoryCtrl'
  })
  .when('/Events/:category/:event', {
    templateUrl: 'views/details.html',
    controller: 'DetailsCtrl'
  })
  .when('/Online', {
    templateUrl: 'views/online.html',
    controller: 'OnlineCtrl'
  })
  .when('/Expo', {
    templateUrl: 'views/expo.html',
    controller: 'ExpoCtrl'
  })
  .when('/Workshop', {
    templateUrl: 'views/workshop.html',
    controller: 'WorkshopCtrl'
  })
  .when('/Proshow', {
    templateUrl: 'views/proshow.html',
    controller: 'ProshowCtrl'
  })
  .when('/Sponsors', {
    templateUrl: 'views/sponsors.html',
    controller: 'SponsorsCtrl'
  })
  .when('/Contacts', {
    templateUrl: 'views/contacts.html',
    controller: 'ContactsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
});
