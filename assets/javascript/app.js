$(document).ready(function(){ 

console.log('it works!');

// Variables for scores and timer //
var app = $('#second-content');
var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var remainingTime;
var questionIndex = 0;
var intervalId;

// Function to begin the game which removes the start button, the p tag and begins the questions //

function start(){
    var $start = $('<button id="start">Start Game</button>');
    $start.on('click', askQuestions);
    app.empty();
    app.append($start);
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    questionIndex = 0;
}

start();

// Function to set the timer from 30 seconds, if time runs out then unanswered goes up and new page appears saying correct answer and image //

function displayClock(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    remainingTime--;
    $("#clock").text(remainingTime + " seconds");

        if (remainingTime === 0){
            clearInterval(intervalId);
            showAnswer();
            // app.empty();
            // unanswered++;
            // app.append('<h2>Times Up! The correct answer was: ' + question.answer + '</h2>');
        }
}

// Function that contains a for loop that will go through the questions array and ask the questions, as well as keep track of the score and answers picked by the user //

function askQuestions(){
    remainingTime = 30;
    app.empty();
    $("p").remove();

    var question = triviaQuestions[questionIndex];
    var $question = $('<div class="btn-group-vertical">');
    var clock = $('<div id="time">Time Remaining: <span id ="clock">' + remainingTime + ' seconds' + '</span></div>');
    var $q = $('<h3>' + question.questions + '</h3>');
    var $button;
    timer = displayClock();

    $question.append(clock);
    $question.append($q);
    
    for (var i=0; i<question.choices.length; i++){
        $button = $('<button id="choice">' + question.choices[i] + '</button>');
        $button.on('click', handleAnswer);
        $question.append($button);
    }

    app.append($question);

}

function handleAnswer(){
    var value = $(this).text();
    showAnswer(value);
}

function showAnswer(userAnswer) {
    question = triviaQuestions[questionIndex];
    app.empty();
    $img = question.images;

    if (userAnswer === question.answer) {
        correctAnswer++;
        app.append('<h2>Correct! The answer is: ' + question.answer + '</h2>');
        app.append($img);
    } else {
        wrongAnswer++;
        app.append('<h2>Wrong! The correct answer was: ' + question.answer + '</h2>');
        app.append($img);
    
        } if (remainingTime === 0){
            unanswered++;
            app.append('<h2>Times Up! The correct answer was: ' + question.answer + '</h2>');
            app.append($img);
        }

    questionIndex++;

    if (questionIndex === triviaQuestions.length){
        setTimeout(showScore, 3000);
    } else {
        setTimeout(askQuestions, 3000);
    }
}

function showScore (){
    app.empty();
    var $score = $("<h2>Let's See How You Did:</h2>");
    app.append($score);
    var correct = $('<p>Correct Answers: ' + correctAnswer + '</p>');
    var incorrect = $('<p>Incorrect Answers: ' + wrongAnswer + '</p>');
    var missed = $('<p>Unanswered Questions: ' + unanswered + '</p>');
    app.append(correct, incorrect, missed);
    var $redo = $('<button id="redo">Play Again?</button>');
    $redo.on('click', askQuestions);
    app.append($redo);
    resetGame();
}

function resetGame(){
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    questionIndex = 0;
}




// Below is the array that holds all the trivia questions, choices and answers //

var triviaQuestions = [
    {   questions: "What kind of animal is Rocko from Rocko's Modern Life?",
        choices: ["Dog", "Kangaroo", "Raccoon", "Wallaby"],
        images:  ["images/rocko.jpg"],
        answer: "Wallaby"
        },
    
    {   questions: "What is Tommy Pickles' (Rugrats) brothers name?",
        choices: ["Dil", "Phillip", "Chuckie", "Stu"],
        images:  ["images/rugrats-01.jpg"],
        answer: "Dil"
        },
    
    {   questions: "What's the name of the fictional town where Rocket Power         takes place?",
        choices: ["Ocean Beach", "Oceanside", "Ocean Shores", "Ocean City"],
        images:  ["images/rocket-power.jpg"],
        answer: "Ocean Shores"
        },
    
    {   questions: "In which NYC borough does Arnold from 'Hey Arnold' live?",
        choices: ["Bronx", "Brooklyn", "Manhattan", "Queens"],
        images:  ["images/hey-arnold.jpg"],
        answer: "Brooklyn"
        },
    
    {   questions: "Who does Doug Funny have a crush on in the series Doug?",
        choices: ["Patti Mayonnaise", "Beebe Bluff", "Theda Funnie", "Connie Benge"],
        images:  ["images/doug.jpg"],
        answer: "Patti Mayonnaise"
        },
    
    {   questions: "What are the names of the Angry Beavers?",
        choices: ["Tom and Jerry", "Bob and Evan", "Norbert and Daggett", "Curtis and Leo"],
        images:  ["images/angry-beavers.jpg"],
        answer: "Norbert and Daggett"
        },
    
    {   questions: "What town is Spongebob from in Spongebob Squarepants?",
        choices: ["Krusty Krab", "Rock Bottom", "Jellyfish Fields", "Bikini Bottom"],
        images:  ["images/spongebob.jpg"],
        answer: "Bikini Bottom"
        },
    
    {   questions: "What were the names of the twins on Rugrats?",
        choices: ["Bill and Jill", "Phil and Lill", "Hank and Hannah", "Sally and Sam"],
        images:  ["images/rugrats-02.jpg"],
        answer: "Phil and Lill"
        },
    
    {   questions: "In Ren and Stimpy, what kind of dog was Ren?",
        choices: ["A Terrier", "A Corgi", "A Bulldog", "A Chihuahua"],
        images:  ["images/ren-stimpy.jpg"],
        answer: "A Chihuahua"
        },
    
    ]; 




//end of document ready function//
})