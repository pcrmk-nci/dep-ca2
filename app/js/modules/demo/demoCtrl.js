'use strict';

angular
  .module('demoModule')
  .controller('DemoCtrl', ['$scope', function($scope){
    $scope.name = 'Angular';
  }]);
