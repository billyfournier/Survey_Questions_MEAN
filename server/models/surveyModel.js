console.log('**** model linked ****');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionsSchema = new mongoose.Schema({
  _survey: {type: Schema.Types.ObjectId, ref: 'Surveys'},
  option: { type: String, required: true },
  votes: { type: Number, default: 0 },
});

var SurveysSchema = new mongoose.Schema({
  question: String,
  username: String,
  options: [
    {type: Schema.Types.ObjectId, ref: 'Options'},
    {type: Schema.Types.ObjectId, ref: 'Options'},
    {type: Schema.Types.ObjectId, ref: 'Options'},
    {type: Schema.Types.ObjectId, ref: 'Options'},
  ]
},{timestamps:true});


// var SurveysSchema = new mongoose.Schema({
//   question: String,
//   username: String,
//   options: [
//               {option: String, votes: {type: Number, default: 0}},
//               {option: String, votes: {type: Number, default: 0}},
//               {option: String, votes: {type: Number, default: 0}},
//               {option: String, votes: {type: Number, default: 0}}
//            ],
//   date: { type: Date, default: Date.now }
// });

var Surveys = mongoose.model('Surveys', SurveysSchema);
var Options = mongoose.model('Options', OptionsSchema);
