var startBtn = document.querySelector("#startBtn");
var stage = document.querySelector(".stage")
var questionDiv = document.querySelector(".questionDiv")
var questionSection = document.querySelector("#questionSection")
var index = 0
var time = document.querySelector("#time")
var setIntervalID = ""
var timeLeft = questions.length * 15

function startQuiz() {
    startBtn.setAttribute("class", "hide");
    questionSection.classList.remove("hide")
    displayQuestion()
    setIntervalID = setInterval(countdown, 1000)
}

function countdown() {
    if (timeLeft >= 0) {
        time.textContent = timeLeft--
    }
}

function nextQuestion(event) {
    var userChoice = event.target.getAttribute("data-id")
    var answer = questions[index].answer
    var message = document.querySelector("#message")
    console.log(userChoice)
    console.log(answer)
    if (userChoice == answer) {
        message.textContent = "Correct"
    } else {
        message.textContent = "Wrong"
        timeLeft = timeLeft-10
    }
   index++
   displayQuestion()
}

function displayQuestion() {
    questionSection.innerHTML = `
    <p>${questions[index].question}</p>
                <ol class="choiceBtn">
                    <li><button data-id="0">${questions[index].choices[0]}</button></li>
                    <li><button data-id="1">${questions[index].choices[1]}</button></li>
                    <li><button data-id="2">${questions[index].choices[2]}</button></li>
                    <li><button data-id="3">${questions[index].choices[3]}</button></li>
                </ol>
    `
    var choiceBtn = document.querySelector(".choiceBtn")
    choiceBtn.addEventListener("click", nextQuestion)


}

startBtn.addEventListener("click", startQuiz)