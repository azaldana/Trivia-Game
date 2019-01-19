$(document).ready(function(){ 

// Variables for scores and timer //
var correctAnswer = 0;
var wrongAnswer = 0;
var unanswered = 0;
var timer = 30;
var intervalId;

// Function to begin the game which removes the start button, the p tag and begins the questions //

var button = $("button");
    button.click(function () {
        $("#button").remove();
        $("button").remove();
        $("p").remove();
        askQuestions();
})

// Function that contains a for loop that will go through the questions array and ask the questions, as well as keep track of the score and answers picked by the user //

function askQuestions(){

    setTimer();
    
    for (var i=0; i<triviaQuestions.length; i++){
    
        var response = $("#question");
        response.append(triviaQuestions[i].question);
        
        var choice = $("#choices");
        choice.append(triviaQuestions[i].choices);
    
        
        if (response === triviaQuestions[i].correctAnswer){
            answerCorrect();
    
        } else if (timer === 0) {
            timeRunout();
    
        } else {
            answerIncorrect();
        }
        }
    }
    lastPage();


// Below is the array that holds all the trivia questions, choices and answers //

var triviaQuestions = [
    {   question: "What kind of animal is Rocko from Rocko's Modern Life?",
        choices: ["Dog", "Kangaroo", "Raccoon", "Wallaby"],
        images:  ["images/rocko.jpg"],
        answer: [3]
        },
    
    {   question: "What is Tommy Pickles' (Rugrats) brothers name?",
        choices: ["Dil", "Phillip", "Chuckie", "Stu"],
        images:  ["images/rugrats-01.jpg"],
        answer: [0]
        },
    
    {   question: "What's the name of the fictional town where Rocket Power         takes place?",
        choices: ["Ocean Beach", "Oceanside", "Ocean Shores", "Ocean City"],
        images:  ["images/rocket-power.jpg"],
        answer: [2]
        },
    
    {   question: "In which NYC borough does Arnold from 'Hey Arnold' live?",
        choices: ["Bronx", "Brooklyn", "Manhattan", "Queens"],
        images:  ["images/hey-arnold.jpg"],
        answer: [1]
        },
    
    {   question: "Who does Doug Funny have a crush on in the series Doug?",
        choices: ["Patti Mayonnaise", "Beebe Bluff", "Theda Funnie", "Connie Benge"],
        images:  ["images/doug.jpg"],
        answer: [0]
        },
    
    {   question: "What are the names of the Angry Beavers?",
        choices: ["Tom and Jerry", "Bob and Evan", "Norbert and Daggett", "Curtis and Leo"],
        images:  ["images/angry-beavers.jpg"],
        answer: [2]
        },
    
    {   question: "What town is Spongebob from in Spongebob Squarepants?",
        choices: ["Krusty Krab", "Rock Bottom", "Jellyfish Fields", "Bikini Bottom"],
        images:  ["images/spongebob.jpg"],
        answer: [3]
        },
    
    {   question: "What were the names of the twins on Rugrats?",
        choices: ["Bill and Jill", "Phil and Lill", "Hank and Hannah", "Sally and Sam"],
        images:  ["images/rugrats-02.jpg"],
        answer: [1]
        },
    
    {   question: "In Ren and Stimpy, what kind of dog was Ren?",
        choices: ["A Terrier", "A Corgi", "A Bulldog", "A Chihuahua"],
        images:  ["images/ren-stimpy.jpg"],
        answer: [3]
        },
    
    ];

// Function to set the timer from 30 seconds, if time runs out then unanswered goes up and new page appears saying correct answer and image //

function setTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}

function decrement(){
    timer--;
    $("#time").html("Time Remaing: " + timer + " seconds");

        if (timer === 0){
            stop();
            timeRunout();
        }
}
function stop(){
    clearInterval(intervalId);
}

// Function to start or reset the game, will reset correct, incorrect, unanswered questions and will begin the quiz all over again //

function resetGame() {
    correctAnswer = 0;
    wrongAnswer = 0;
    unanswered = 0;
    timer = 30;
    askQuestions();
}

// This function allows for a new screen to appear announcing that the question has been answered correctly //

function answerCorrect(){
    correctAnswer++;
    $("#quesion-answer").append("Correct! The Answer is " + triviaQuestions[i].answer);
    $("#answer").append(triviaQuestions[i].images);
    setTimeout(threeSeconds, 3000);
    
    function threeSeconds() {
        askQuestions();
    }
}

// This function allows for a new screen to appear announcing that the question has been answered wrong and what the correct answer is //

function answerIncorrect(){
    wrongAnswer++;
    $("#quesion-answer").append("Wrong! The Answer was " + triviaQuestions[i].answer);
    $("#answer").append(triviaQuestions[i].images);
    setTimeout(threeSeconds, 3000);
    
    function threeSeconds() {
        askQuestions();
    }
}

// This function allows for a new screen to appear announcing that you ran out of time and what the correct answer to the question is //

function timeRunout(){
    unanswered++;
    $("#quesion-answer").append("You Ran Out of Time! The Correct Answer was " + triviaQuestions[i].answer);
    $("#answer").append(triviaQuestions[i].images);
    setTimeout(threeSeconds, 3000);
    
    function threeSeconds() {
        askQuestions();
    }
}

// This function allows for a new screen to appear announcing the final score of the game. This will happen once all questions have been asked //

function lastPage(){
    $("#last-page").append("<p>Lets See How You Did:</p>");
    $("#correct").append("Correct Answers: " + correctAnswer);
    $("#incorrect").append("Incorrect Answers: " + wrongAnswer);
    $("#unanswered").append("Unanswered Questions: " + unanswered);

    var restart = $("#restart-btn");
    restart.click(function () {
        $("#restart-btn").remove();
        lastPage().remove();
        resetGame();
    });
}

// Hides the last page content from the main screen //

$("#last-page").hide();
$("#correct").hide();
$("#incorrect").hide();
$("#unanswered").hide();
$("#restart-btn").hide();


//end of document ready function//
})