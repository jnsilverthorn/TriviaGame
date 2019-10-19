var questionTimer = 15;
var timeBtwQuestions = 5;
var clear = "";
var qNumber = 1;
var questionNumber = 1;
var index = 0;
var correct = 0;

var timer1 = $("#timeRemaining");
var timer2 = $("#timeBtwQues");
var questionText = $("#question");

var answers = $(".answer")
var answer1 = $("#ans1");
var answer2 = $("#ans2");
var answer3 = $("#ans3");
var answer4 = $("#ans4");

var startBtn = $("#startBtn");
var rulesText = $("#rules");
var qResponse = $("#questionResponse");

var intervalID;
var intervalID2;
var results = $("#results");
//-----------------------------------------------
$(document).on("click", "#superReset", function(){
    console.log("hi");
    location.reload();
});
//-----------------------------------------------
var questionIndex = [{
    question: "q1",
    answerChoices: {
        a: "a. ans1",
        b: "b. ans2",
        c: "c. ans3",
        d: "d. ans4"
    },
    correctAnswer: "c",
},{
    question: "q2",
    answerChoices: {
        a: "a. ans5",
        b: "b. ans6",
        c: "c. ans7",
        d: "d. ans8"
    },
    correctAnswer: "d",
},{
    question: "q3",
    answerChoices: {
        a: "a. ans9",
        b: "b. ans10",
        c: "c. ans11",
        d: "d. ans12"
    },
    correctAnswer: "c",
},{
    question: "q4",
    answerChoices: {
        a: "a. ans13",
        b: "b. ans14",
        c: "c. ans15",
        d: "d. ans16"
    },
    correctAnswer: "a",
},{
    question: "q5",
    answerChoices: {
        a: "a. ans17",
        b: "b. ans18",
        c: "c. ans19",
        d: "d. ans20"
    },
    correctAnswer: "b",
},{
    question: "q6",
    answerChoices: {
        a: "a. ans21",
        b: "b. ans22",
        c: "c. ans23",
        d: "d. ans24"
    },
    correctAnswer: "d",
},{
    question: "q7",
    answerChoices: {
        a: "a. ans25",
        b: "b. ans26",
        c: "c. ans27",
        d: "d. ans28"
    },
    correctAnswer: "c",
},{
    question: "q8",
    answerChoices: {
        a: "a. ans29",
        b: "b. ans30",
        c: "c. ans31",
        d: "d. ans32"
    },
    correctAnswer: "a",
},{
    question: "q9",
    answerChoices: {
        a: "a. ans33",
        b: "b. ans34",
        c: "c. ans35",
        d: "d. ans36"
    },
    correctAnswer: "d",
},{
    question: "q10",
    answerChoices: {
        a: "a. ans37",
        b: "b. ans38",
        c: "c. ans39",
        d: "d. ans40"
    },
    correctAnswer: "b",
}];

function displayQuestion(){
    questionText.text("Question " + questionNumber + ": " + questionIndex[index].question)
    answer1.text(questionIndex[index].answerChoices.a);
    answer2.text(questionIndex[index].answerChoices.b);
    answer3.text(questionIndex[index].answerChoices.c);
    answer4.text(questionIndex[index].answerChoices.d);
};

function displayNextQuestion(){
    questionNumber++;
    index++;
    displayQuestion();
    timer1function();
    timer1interval();
};

function rightAnswer(){
    qResponse.text("Correct! On to the next one!");
};

function wrongAnswer(){
    qResponse.text("Not quite! The correct answer is: " + questionIndex[index].correctAnswer);
};

function timer1function(){
    questionTimer--;
    timer1.text("Time Remaining: " + questionTimer + " second(s)");
    if(questionTimer === 0){
        clearInterval1();
        timeBtwQuestions = 5;
        questionTimer = 16;
        timer2interval();
        if(qNumber === 1){
            wrong1();
        }
        else if(qNumber === 2){
            wrong2();
        }
        else if(qNumber === 3){
            wrong3();
        }
        else if(qNumber === 4){
            wrong4();
        }
        else if(qNumber === 5){
            wrong5();
        }
        else if(qNumber === 6){
            wrong6();
        }
        else if(qNumber === 7){
            wrong7();
        }
        else if(qNumber === 8){
            wrong8();
        }
        else if(qNumber === 9){
            wrong9();
        }
        else if(qNumber === 10){
            wrong10();
        };
    };    
};

function timer2function(){
    timeBtwQuestions--;
    timer2.text("Get Ready For the Next Question in: " + timeBtwQuestions + " second(s)");
    if(timeBtwQuestions === 0){
        clearInterval2();
        timeBtwQuestions = 5;
        questionTimer = 16;
        nextQuestionRules();
    };
};

function timer1interval(){
    intervalID = setInterval(timer1function, 1000);
    timer1.text("Time Remaining: " + questionTimer + " second(s)");
};

function clearInterval1(){
    clearInterval(intervalID);
};

function timer2interval(){
    intervalID2 = setInterval(timer2function, 1000);
    timer2.text("Get Ready For the Next Question in: " + timeBtwQuestions + " second(s)");
};

function noCompound(){
    answer1.unbind();
    answer2.unbind();
    answer3.unbind();
    answer4.unbind();
};

function clearInterval2(){
    clearInterval(intervalID2);
};

function cssReset(){
    answer1.css("background-color", "rgba(61, 200, 255, 1)");
    answer2.css("background-color", "rgba(61, 200, 255, 1)");
    answer3.css("background-color", "rgba(61, 200, 255, 1)");
    answer4.css("background-color", "rgba(61, 200, 255, 1)");
};

function nextQuestionRules(){
    displayNextQuestion();
    timer2.text(clear);
    qResponse.text(clear);
    cssReset();
};

function score(){
    rulesText.text(clear);
    startBtn.text(clear);
    answers.text(clear);
    questionText.text(clear);
    timer1.text(clear);
    qResponse.text(clear);
    cssReset();
    startBtn.css("background-color", "rgba(61, 200, 255, 1)");
    results.text("Score: " + correct + "/10" + " or " + correct + "0%");
    if(correct >= 7){
        results.append("<div>Good Job!</div>");
        results.append("<button id='superReset'>Try Again!</button>");
    }
    else{
        results.append('<div>Try Again!</div>');
        results.append("<button id='superReset'>Try Again!</button>");
    };

};

startBtn.on("click", function(){
    if(startBtn.text() === "Start Quiz!"){
        displayQuestion();
        rulesText.text("");
        startBtn.text("Good Luck!");
        question1();
        timer1interval();
    };
});

function wrong1(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question2();
};

function wrong2(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question3();
};

function wrong3(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question4();
};

function wrong4(){
    wrongAnswer();
    answer1.css("background-color", "#4dff4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question5();
};

function wrong5(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#4dff4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question6();
};

function wrong6(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question7();
};

function wrong7(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question8();
};

function wrong8(){
    wrongAnswer();
    answer1.css("background-color", "#4dff4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question9();
};

function wrong9(){
    wrongAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question10();
};

function wrong10(){
    wrongAnswer();
    clearInterval1();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#4dff4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    setTimeout(function(){
        score();
    }, 2000);
};

function right1(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question2();
    correct++;
};

function right2(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question3();
    correct++;
};

function right3(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question4();
    correct++;
};

function right4(){
    rightAnswer();
    answer1.css("background-color", "#4dff4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question5();
    correct++;
};

function right5(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#4dff4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question6();
    correct++;
};

function right6(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question7();
    correct++;
};

function right7(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#4dff4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question8();
    correct++;
};

function right8(){
    rightAnswer();
    answer1.css("background-color", "#4dff4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    qNumber++;
    question9();
    correct++;
};

function right9(){
    rightAnswer();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#ff4d4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#4dff4d");
    answer4.css("margin", "10px");
    qNumber++;
    question10();
    correct++;
};

function right10(){
    rightAnswer();
    clearInterval1();
    answer1.css("background-color", "#ff4d4d");
    answer1.css("margin", "10px");
    answer2.css("background-color", "#4dff4d");
    answer2.css("margin", "10px");
    answer3.css("background-color", "#ff4d4d");
    answer3.css("margin", "10px");
    answer4.css("background-color", "#ff4d4d");
    answer4.css("margin", "10px");
    correct++;
    setTimeout(function(){
        score();
    }, 2000);
};

function question1(){
    if (qNumber === 1){
        answer1.one("click", function(){
            wrong1();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong1();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            right1();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong1();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question2(){
    noCompound();
    if (qNumber === 2){
        answer1.one("click", function(){
            wrong2();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong2();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong2();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            right2();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question3(){
    noCompound();
    if (qNumber === 3){
        answer1.one("click", function(){
            wrong3();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong3();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            right3();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong3();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question4(){
    noCompound();
    if (qNumber === 4){
        answer1.one("click", function(){
            right4();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong4();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong4();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong4();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question5(){
    noCompound();
    if (qNumber === 5){
        answer1.one("click", function(){
            wrong5();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            right5();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong5();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong5();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question6(){
    noCompound();
    if (qNumber === 6){
        answer1.one("click", function(){
            wrong6();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong6();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong6();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            right6();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question7(){
    noCompound();
    if (qNumber === 7){
        answer1.one("click", function(){
            wrong7();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong7();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            right7();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong7();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question8(){
    noCompound();
    if (qNumber === 8){
        answer1.one("click", function(){
            right8();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong8();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong8();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            wrong8();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question9(){
    noCompound();
    if (qNumber === 9){
        answer1.one("click", function(){
            wrong9();
            answer1.click = clearInterval1();
            answer1.click = timer2interval();
        });
        answer2.one("click", function(){
            wrong9();
            answer2.click = clearInterval1();
            answer2.click = timer2interval();
        });
        answer3.one("click", function(){
            wrong9();
            answer3.click = clearInterval1();
            answer3.click = timer2interval();
        });
        answer4.one("click", function(){
            right9();
            answer4.click = clearInterval1();
            answer4.click = timer2interval();
        });
    };
};

function question10(){
    noCompound();
    if (qNumber === 10){
        answer1.one("click", function(){
            wrong10();
            answer1.click = clearInterval1();
            answer1.click = timer2.text("Now For Your Score:")
        });
        answer2.one("click", function(){
            right10();
            answer2.click = clearInterval1();
            answer2.click = timer2.text("Now For Your Score:")
        });
        answer3.one("click", function(){
            wrong10();
            answer3.click = clearInterval1();
            answer3.click = timer2.text("Now For Your Score:")
        });
        answer4.one("click", function(){
            wrong10();
            answer4.click = clearInterval1();
            answer4.click = timer2.text("Now For Your Score:")
        });
    };
};


