'use strict';

angular.module('cornerstoneApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.topics = $http.get('topics.json').then(function(r){
      $scope.topics = r.data;
    });

    $scope.workers = $http.get('workers.json').then(function(r){
      $scope.workers = r.data;
    });
  }]);
