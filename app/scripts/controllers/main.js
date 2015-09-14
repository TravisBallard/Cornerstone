'use strict';

angular.module('cornerstoneApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.topics = $http.get('topics.json').success(function(r){
      $scope.topics = r;
    });

    $scope.workers = $http.get('workers.json').success(function(r){
      $scope.workers = r;
    });
  }]);
