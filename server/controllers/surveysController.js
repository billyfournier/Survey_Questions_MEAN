console.log('**** users controller');
var mongoose = require('mongoose');

var Surveys = mongoose.model('Surveys');
var Options = mongoose.model('Options');

function SurveysController(){

  // Create a survey poll
  this.create = function(req,res){

    var question_data = {
      username: req.body.username,
      question: req.body.question,
    }

    var question = new Surveys(question_data);
    question.save(function(err){
      if(err) {
        console.log(err);
      }
      else {

        var options_data = [
          {option: req.body.opt1, _survey: question._id},
          {option: req.body.opt2, _survey: question._id},
          {option: req.body.opt3, _survey: question._id},
          {option: req.body.opt4, _survey: question._id},
        ]

        var options;
        for (var i = 0; i< options_data.length; i++){
          options = new Options(options_data[i]);
          options.save(function(err){
            if(err){
              console.log(err);
            }

          })
          console.log('\n***** ',question.options, '\n');
          question.options.push(options);
        }
        question.save(function(err){
          if(err){
            console.log(err);
          }
          else {
            res.json({success: 'success'});
          }
        })
      }
    })
  };

  // Create a survey poll
  // this.create = function(req,res){
  //     var new_data = {
  //     username: req.body.username,
  //     question: req.body.question,
  //     option: [
  //       {option: req.body.opt1},
  //       {option: req.body.opt2},
  //       {option: req.body.opt3},
  //       {option: req.body.opt4}
  //     ],
  //   }
  //   var new_survey = new Surveys(new_data);;
  //   new_survey.save(function(err){
  //     if(err){
  //       console.log(err, '   *********\n');
  //       res.json({error: err});
  //     }
  //     else {
  //       console.log( '\n**********   Sucess   *********\n');
  //       res.json({success: 'success'});
  //     }
  //   })
  // }

  this.delete = function(req,res){
    Surveys.remove({_id: req.params.id}, function(err, result){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({success: "successfull"});
      }
    })
  }

  // Incriments an specific option by 1 vote
  this.vote = function(req,res){
    console.log(req.params.id);
    Options.update({_id: req.params.id}, {$inc: { votes : 1 }}, function(err,response){
      if(err){
        console.log(err);
        res.json({error: err});
      }
      else {
        res.json({success: response});
      }
    });
  }

  // Retrieves all surveys with associated options
  this.getSurveys = function(req,res){
    Surveys.find({})
    .populate('options')
    .exec( function(err, surveys){
      if(err){
        res.json({error: err});
      }
      else {
        res.json({surveys: surveys});
      }
    })
  }
}

surveysController = new SurveysController();
module.exports = surveysController;
