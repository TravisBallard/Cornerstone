'use strict';

/**
 * @ngdoc overview
 * @name cornerstoneApp
 * @description
 * # cornerstoneApp
 *
 * Main module of the application.
 */
angular
  .module('cornerstoneApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
