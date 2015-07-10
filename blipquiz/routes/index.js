var express = require('express');
var router = express.Router();
var counter = require('../data/counter');
var questions = require('../data/data');
var question = "";


/* GET home page. */
router.get('/', function(req, res, next) {
    counter.questionNumber = 1;
    counter.score = 0;
    questions.sort(function(){return Math.round(Math.random()) - 0.5;});
    res.render('index', { title: 'Blip Quiz Game' });
});


router.get('/question', function(req, res, next) {
	if (counter.questionNumber <= questions.length) {
        question = questions[counter.questionNumber - 1];
        question.possibleAnswers.sort(function(){return Math.round(Math.random()) - 0.5;});
        res.render('question', { 
        title: 'Blip Quiz Game',
        questionNumber: counter.questionNumber, 
        score: counter.score,
        questionText: question.questionText, 
        answer1: question.possibleAnswers[0].answerText, 
        answer2: question.possibleAnswers[1].answerText,
        answer3: question.possibleAnswers[2].answerText,
        answer1score: question.possibleAnswers[0].score, 
        answer2score: question.possibleAnswers[1].score,
        answer3score: question.possibleAnswers[2].score
        });
    }
    else {
        res.render ('finalScore', { title: 'Blip Quiz Game', score: counter.score });
    }

});

router.post('/questionFeedback', function(req, res, next) {
    var unselectedAnswers = [];
    var questionScore = parseInt(req.body.resposta);
    var feedback = "";
    var unselectedOption1 = "";
    var unselectedOption2 = "";
    var unselectedFeedback1 = "";
    var unselectedFeedback2 = "";
    for (var i = 0; i < 3; i++) {
        if (question.possibleAnswers[i].score == questionScore) {
            feedback = question.possibleAnswers[i].feedback;
        }
        else {
            unselectedAnswers.push(question.possibleAnswers[i]);
        }
    }
    unselectedOption1 = unselectedAnswers[0].answerText;
    unselectedOption2 = unselectedAnswers[1].answerText;
    unselectedFeedback1 = unselectedAnswers[0].feedback;
    unselectedFeedback2 = unselectedAnswers[1].feedback;
    
    counter.score = counter.score + questionScore;
    res.render ('questionFeedback', { 
        title: 'Blip Quiz Game', 
        questionNumber: counter.questionNumber, 
        questionScore: questionScore, 
        score: counter.score, 
        feedback: feedback,
        unselectedOption1: unselectedOption1,
        unselectedOption2: unselectedOption2,
        unselectedFeedback1: unselectedFeedback1,
        unselectedFeedback2: unselectedFeedback2
    });
        
    counter.questionNumber = counter.questionNumber + 1;
});

module.exports = router;