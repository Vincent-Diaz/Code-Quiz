// Delcared variables
var countdownEl = document.querySelector("#time");
var startEL = document.querySelector("#startBtn");
var questionsEL = document.querySelector("#questions");
var wrapper = document.querySelector(".wrapper"); 
var answerEl = document.querySelector("answer");
var choicesEl = document.querySelector("#choicesUl");
// Array with question, choices, and answers
var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "number"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in the Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
];
// Declared variables
var questionIndex = 0;
var secondsLeft = 75;
var penalty = 10;

startEL.addEventListener("click", function(event){
    startEL.style.display = "none";
    timeCount();
    questionsEL.textContent = "";
    choicesEl.textContent = "";
    for (var i = 0; i < questions.length; i++) {
        var answerBtn = document.createElement("Button");
        answerBtn.innerHTML = quiz[0].questions[i];
        questionsEL.appendChild(answerBtn);
        answerBtn.className = "answer-button";
        if (quiz[0].questions[i] === quiz[0].correct){
            answerBtn.setAttribute("data-correct", true);
        }
    }
});

document.body.addEventListener("click", function(event){
    var target = event.target
    if(target.classList.contains("answers-button")) {
        var isCorrect = target.getAttribute("data-correct");
        if (isCorrect) {
            answerEl.textContent = "Correct!";
        } else {
            answerEl.textContent = "Wrong!";
        }
    }
})