console.log('**** routes');
var mongoose = require('mongoose');

require('../controllers/surveysController.js');  //path to controller file
module.exports = function(app){
  app.post('/create', surveysController.create);
  app.get('/survey', surveysController.getSurveys);
  app.post('/vote/:id', surveysController.vote);
  app.delete('/survey/:id', surveysController.delete);
}
