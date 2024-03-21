var returnToQuizBtn = document.querySelector(".returnToQuizBtn");
var highScoresText = document.querySelector("#high-scores");
let highScoresList = '';

function returnToQuiz() {
    window.location.href = "index.html";
}
for (let i = 0; i < localStorage.length; i++) {
    var highScoreData = localStorage.getItem(localStorage.key(i));
    highScoresList = highScoreData
};
    
highScoresText.innerHTML = highScoresList;
    
returnToQuizBtn.addEventListener("click", returnToQuiz);