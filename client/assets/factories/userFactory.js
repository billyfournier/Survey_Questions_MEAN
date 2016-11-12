console.log('*** userFactory loaded ***');
myApp.factory('userFactory', function($http,$routeParams) {

  var user = JSON.parse(localStorage.getItem('user'));

  function userFactory(){
    var _this = this;

    _this.login = function(user_data, callback){
      console.log(user_data);
      user = user_data;
      localStorage.setItem('user', JSON.stringify(user));
      callback(); //This is just going back to the controller to redirect... why? Because I want it to!
    }

    _this.logout = function(callback){
      console.log('factory logout()');
      localStorage.setItem('user',null);
      user = null;
      callback(); //This is just going back to the controller to redirect... why? Because I want it to!
    }

    _this.getUser = function(){
      return user;
    }
  }
  return new userFactory();
});
