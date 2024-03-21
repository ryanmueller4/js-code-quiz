var startBtn = document.querySelector("#startBtn");
var directions = document.querySelector(".directions");
var stage = document.querySelector(".stage");
var questionDiv = document.querySelector(".questionDiv");
var questionSection = document.querySelector("#questionSection");
var index = 0;
var time = 75;
var timer;
var message = document.querySelector("#message");
var timerElement = document.querySelector("#timerElement");
var scoreDiv = document.querySelector(".scoreDiv");
var submitForm = document.querySelector(".submitForm");
var submitBtn = document.querySelector("#submitBtn");
var highscoreBtn = document.querySelector(".highscoreBtn");

function startQuiz() {
    startBtn.setAttribute("class", "hide");
    questionSection.classList.remove("hide");
    displayQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.getElementById("time").innerText = time;
        }
    }, 1000);
}

function nextQuestion(event) {
    console.log(questions[index].answer)
    var userDataIdChoice = event.target.getAttribute("data-id");
    var userChoice = questions[index].choices[userDataIdChoice];
    console.log(userChoice)
    var answer = questions[index].answer
    if (userChoice === answer) {
        message.textContent = "Correct!";
    } else {
        message.textContent = "Incorrect";
        time -= 10;
    }
   index++;
   displayQuestion();
}

function displayQuestion() {
    if (index < 5) {
        questionSection.innerHTML = `
        <p>${questions[index].question}</p>
                    <ol class="choiceBtn">
                        <li><button data-id="0">${questions[index].choices[0]}</button></li>
                        <li><button data-id="1"}>${questions[index].choices[1]}</button></li>
                        <li><button data-id="2">${questions[index].choices[2]}</button></li>
                        <li><button data-id="3">${questions[index].choices[3]}</button></li>
                    </ol>
        `
        var choiceBtn = document.querySelector(".choiceBtn");
        choiceBtn.addEventListener("click", nextQuestion);
    } else {
        endQuiz();
        clearInterval(timer);
    }
}

function endQuiz() {
    questionSection.classList.add("hide");
    message.classList.add("hide");
    stage.classList.add("hide");
    timerElement.classList.add("hide");
    scoreDiv.classList.remove("hide");
}

function handleSubmit() {
    var initials = document.querySelector("#initials").value;
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    var score = {
        initials: initials,
        score: time
    }
    highScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function viewHighScores() {
    window.location.href = "highscores.html";
}

startBtn.addEventListener("click", startQuiz);
submitForm.addEventListener("submit", handleSubmit);
highscoreBtn.addEventListener("click", viewHighScores);