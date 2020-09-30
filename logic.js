// Delcared variables
var countdownEl = document.querySelector("#timer");
var startEl = document.querySelector("#startBtn");
var mainEl = document.querySelector("#main"); 
var answerChoices = document.querySelector("#answers");
var questionEl = document.querySelector("#questions");
var feedback = document.querySelector("#feedback");
//var choicesUl = document.querySelector("")
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
var time = 75;

startEl.addEventListener("click", startQuiz); {
    // startEl.style.display = "none";
    // timeCount();
    // console.log(quiz, "quiz index");
    // mainEl.textContent = "";
    // contentEl.textContent = "";
   // for (var i = 0; i < quiz.length; i++) {
      //  var answerBtn = document.createElement("button");
       // answerBtn.innerHTML = quiz[0].choices[i];
       // mainEl.appendChild(answerBtn);
      //  answerBtn.className = "answer-button";
       // if (quiz[0].choices[i] === quiz[0].answer){
       //     answerBtn.setAttribute("data-correct", true);
     //   }
  //  }
};

// wrapper.addEventListener("click", function(event){
//     var target = event.target
//     if(target.classList.contains("answers-button")) {
//         var isCorrect = target.getAttribute("data-correct");
//         if (isCorrect) {
//             answerEl.textContent = "Correct!";
//         } else {
//             answerEl.textContent = "Wrong!";
//             time = -10;
//         }
//         questionIndex++;
//         mainEl.textContent = "";
//         contentEl.textContent = "";

//         for (var i = 0; i < quiz[0].questions.length; i++) {
//             var answerBtn = document.createElement("Button");
//             answerBtn.innerHTML = quiz[questionIndex].choices[i];
//             mainEl.appendChild(answerBtn);
//             answerBtn.className = "answer-button";
//             if (quiz[questionIndex].choices[i] === quiz[questionIndex].answer)
//             {
//                 answerBtn.setAttribute("data-correct", true);
//             }
//         }
//     }
// })

function startQuiz(){
    mainEl.setAttribute("class", "d-none");
    timeCount();
    render(questionIndex);
}

function timeCount() {
    var timerInterval = setInterval(function () {
            time--;
             countdownEl.textContent = "Time: " + time;
            if (time === 0) {
                clearInterval(timerInterval);
                countdownEl.textContent = "Time's up! ";
            

            } else if (questionIndex) {
                clearInterval(timeInterval);
                questionsEL.textContent = "All Done!";
                

        }
    },1000);
}

 function render(questionIndex) {
    var getQuestion = quiz[questionIndex].question;
    questionEl.textContent = getQuestion;
    //answerChoices.innerHTML = "";
    var getAnswers = quiz[questionIndex].choices;
    console.log(getAnswers);
    for (var i = 0; i < getAnswers.length; i++) {
        var choice = document.createElement("button");
        choice.setAttribute("value", getAnswers[i]);
        choice.textContent = i + 1 + ". " + getAnswers[i];
        console.log(choice);
        answerChoices.appendChild(choice);
    }
 }
function clickQuestion() {
    if (this.value !== quiz[questionIndex].answer) {
        time -= 15;
        countdownEl.textContent = time;
        var pIncorrect = document.createElement("p");
        pIncorrect.textContent = "Wrong!";
        feedback.appendChild(pIncorrect);

    }
    else if (this.value === quiz[questionIndex].answer);{
        countdownEl.textContent = time;
    }
    questionIndex++;
    

}
//  