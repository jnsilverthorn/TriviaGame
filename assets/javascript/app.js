var questionTimer = 15;
var timeBtwQuestions = 5;
var clear = [];
var timer1Off = true;
var timer2Off = true;
var qNumber = 1;
var index = 0;

var timer1 = $("#timeRemaining");
var timer2 = $("#timeBtwQues");
var question = $("#question");

var answer1 = $("#ans1");
var answer2 = $("#ans2");
var answer3 = $("#ans3");
var answer4 = $("#ans4");

var startBtn = $("#startBtn");
var rulesText = $("#rules");
var qResponse = $("#questionResponse");

var responseRight = "Correct! On to the next Question...";
var responseWrong = "Not quite! On to the next Question...";

var intervalID;
var intervalID2;
var results = $("#results");

var questionIndex = [{
    question: "q1",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "a",
},{
    question: "q2",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "d",
},{
    question: "q3",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "c",
},{
    question: "q4",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "a",
},{
    question: "q5",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "b",
},{
    question: "q6",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "c",
},{
    question: "q7",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "c",
},{
    question: "q8",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "a",
},{
    question: "q9",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "d",
},{
    question: "q10",
    answerChoices: {
        a: "ans1",
        b: "ans2",
        c: "ans3",
        d: "ans4"
    },
    correctAnswer: "b",
}];

function count1(){
    questionTimer--;
    timer1.text("Time Remaining: " + questionTimer + " second(s)");    
    if(questionTimer === 0){
        clearInterval(intervalID);
    };
};

function count2(){
    timeBtwQuestions--;
    timer2.text("Get Ready For the Next Question in: " + timeBtwQuestions + " second(s)");
    if(timeBtwQuestions === 0){
        clearInterval(intervalID2);
    };
};

function quesTimer(){
    intervalID = setInterval(count1, 1000);
};

function btwQuesTimer(){
    intervalID2 = setInterval(count2, 1000);
};

function nextQuestion(){
    index++;
    qNumber++;
}

startBtn.on("click", begin);

function begin(){
    rulesText.text(clear);
    startBtn.text("Good Luck!");
    count1();
    quesTimer();
    displayQuestion();
}

function displayQuestion(){
    question.text("Question " + qNumber + ": " + questionIndex[index].question)
    answer1.text(questionIndex[index].answerChoices.a);
    answer2.text(questionIndex[index].answerChoices.b);
    answer3.text(questionIndex[index].answerChoices.c);
    answer4.text(questionIndex[index].answerChoices.d);
}