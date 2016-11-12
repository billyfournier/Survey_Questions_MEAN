myApp.controller('usersController', function($scope, $routeParams, $location, userFactory) {
  console.log('usersContoller()');
  var self = this;

  self.newuser = {};

  self.login = function(){
    console.log('This is uC.login()');
    userFactory.login(self.newuser, function(){
      $location.path('/dashboard');
    })
  }
});
