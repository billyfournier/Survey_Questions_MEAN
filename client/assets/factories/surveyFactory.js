console.log('*** surveyFactory loaded ***');
myApp.factory('surveyFactory', function($http,$routeParams,userFactory) {

  function surveyFactory(){
    var _this = this;

    // _this.create = function(survey_data, callback){
    //   survey_data.username = userFactory.getUser().username;
    //   var refactored_survey_data = {
    //     username: userFactory.getUser().username,
    //     question: survey_data.question,
    //     options: [
    //       {option: survey_data.opt1},
    //       {option: survey_data.opt2},
    //       {option: survey_data.opt3},
    //       {option: survey_data.opt4},
    //     ]
    //   }
    //   $http.post('/create', refactored_survey_data).then(function(res){
    //     callback()
    //   });
    // }

    _this.create = function(survey_data, callback){
      survey_data.username = userFactory.getUser().username;
      var refactored_survey_data = {
        username: userFactory.getUser().username,
        question: survey_data.question,
        opt1: survey_data.opt1,
        opt2: survey_data.opt2,
        opt3: survey_data.opt3,
        opt4: survey_data.opt4,
      }
      $http.post('/create', refactored_survey_data).then(function(res){
        callback()
      });
    }

    _this.vote = function(vote_id, callback){
      $http.post('/vote/'+vote_id, {id:vote_id}).then(function(res){
        callback();
      })
    }

    _this.delete = function(id, callback){
      $http.delete('/survey/'+id).then(function(res){
        callback();
      })
    }

    _this.getSurveys = function(callback){
      $http.get('/survey').then(function(returned_surveys){
        callback(returned_surveys.data.surveys);
      })
    }


  }
  return new surveyFactory();
});
