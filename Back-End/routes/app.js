var bcrypt = require('bcrypt');
const express = require('express');
var User = require('../models/users');
var Questions = require('../models/questions');
const Scores = require('../models/scores');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send("from APP");
});

router.post('/signup', (req, res, next) => {
    console.log("register post");
    addToDB(req, res);
});
async function addToDB(req, res) {
    var user = new User({
        username: req.body.username,
        email: req.body.email,
        password: User.hashPassword(req.body.password)

    })

    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
}

router.post('/index', function(req, res, next) {
    User.findOne({ username: req.body.username }, (err, user) => {
        if (err) {
            console.log("in error");
            console.log(err);
            res.json({
                msg: "Error"
            })
        } else {
            if (!user) {
                res.json({
                    msg: "Invalid Username"
                })
            } else {
                bcrypt.compare(req.body.password, user.password).then(match => {
                        if (match) {
                            console.log("success");

                            res.status(200).json({
                                //  token: token,
                                msg: "Login successfull"
                            })
                        } else {
                            console.log("incorrect password");
                            res.json({
                                msg: "Incorrect Password"
                            })
                        }
                    }).catch(err => {
                        console.log("Something went wrong");
                        res.json({
                            msg: "Something went wrong"
                        })

                    })
            }
        }
    })
});

router.post('/adminhome/:correct/:category', (req, res) => {
    addQuestion(req, res);
});
async function addQuestion(req, res) {
    if(req.params.correct=='A'){
        answer=req.body.optionA;
    }
    else if(req.params.correct=='B'){
        answer=req.body.optionB;
    }
    else if(req.params.correct=='C'){
        answer=req.body.optionC;
    }
    else if(req.params.correct=='D'){
        answer=req.body.optionD;
    }
    var questions = new Questions({
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        optionC: req.body.optionC,
        optionD: req.body.optionD,
        correct: answer,
        category: req.params.category
    })

    questions.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
}

router.post('/questionList', function(req, res){
    console.log("Entering to get question List");
    Questions.find({})
    .exec(function(err,questions){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            res.json({
                ALLquestions: questions
            })
        }
    });
});


router.post('/quizQuestions/:category', function(req, res){
    console.log(req.params.category);
    Questions.find({ category: req.params.category })
    .exec(function(err,questions){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            res.json({
                quizquestions: questions
            })
        }
    });
})


router.post('/newScore/:username/:score/:category', (req, res, next) => {
    addScore(req, res);
});
async function addScore(req, res) {
    var newscore = new Scores({
        username: req.params.username,
        score: req.params.score,
        category:req.params.category
    })

    newscore.save((error, addScore) => {
        if (error) {
            console.log(error)
        } else {
            res.status(200).send(addScore)
        }
    })
}


router.post('/allScores', function(req, res){
    Scores.find({})
    .exec(function(err,allscores){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            console.log(allscores);
            res.json({
                
                allScores: allscores
            })
        }
    });
});

router.post('/myScores/:username', function(req, res){
    Scores.find({username:req.params.username})
    .exec(function(err,myscores){
        if(err){
            console.log("Questions can't be fetched");
        }
        else{
            res.json({
                myScores: myscores
            })
        }
    });
});











module.exports = router;