'use strict';

describe('Controller: Learning Angular', function(){
  beforeEach(module('learningAngular'));

  var scope, DemoCtrl;

  beforeEach(inject(function($controller, $rootScope){
    scope = $rootScope.$new();
    DemoCtrl = $controller('DemoCtrl', {
      $scope: scope
    });
  }));

  it('should work', function(){
    expect(scope.name).toBe('Angular');
  });
});
