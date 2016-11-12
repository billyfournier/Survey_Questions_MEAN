console.log('****  routes.js  ****');
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/login.html',
      controller: 'usersController as UC'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'dashboardController as DC'
    })
    .when('/create', {
      templateUrl: 'partials/create.html',
      controller: 'dashboardController as DC'
    })
    .when('/poll/:id', {
      templateUrl: 'partials/poll.html',
      controller: 'dashboardController as DC'
    })
    .otherwise({
      redirectTo: '/'
    });
});
