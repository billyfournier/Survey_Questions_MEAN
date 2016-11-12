myApp.controller('dashboardController', function($scope, $routeParams, $location,
                                                      userFactory, surveyFactory) {
  console.log('dashboardController()');
  var self = this;

  var surveys = function(){
    surveyFactory.getSurveys(function(response){
      self.surveys = response;
      if($routeParams) { self.current = self.surveys[$routeParams.id];}
    });
  }
  surveys();
  self.user = userFactory.getUser();

  self.create = function(){
    surveyFactory.create(self.survey, function(){
      console.log('create callback');
      $location.path('/dashboard');
    });
  }
  self.delete = function(id){
    surveyFactory.delete(id,function(){
      surveys();
    });
  }

  self.logout =  function(){
    userFactory.logout(function(){
      $location.path('/');
    })
  }

  self.vote = function(vote_id){
    console.log(vote_id);

    surveyFactory.vote(vote_id, function(){
      surveys();
    })
  }

  self.getPoll = function(){
    surveys();
  }

});
