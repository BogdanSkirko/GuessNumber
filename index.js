const getSecretNumber = document.querySelector(".number");
const getCorrect = document.querySelector(".message");
const getHighscore = document.querySelector(".highscore");
const getAgain = document.querySelector(".again");
const getScore = document.querySelector(".score");

//Random number
let secretNumber = Math.floor(Math.random() * 20 + 1);
let getButtonClick = document.querySelector(".check");
getButtonClick.addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;

  //nO WIN
  if (guess) {
    getScore.textContent = getScore.textContent - 1;
    getScore.textContent < 1 ? (getButtonClick.disabled = true) : null;
    secretNumber < guess
      ? (getCorrect.textContent = "Too High!")
      : (getCorrect.textContent = "to Low!!!");
    //When player WIN
    if (secretNumber === guess) {
      getCorrect.textContent = "GREAT!!!";
      document.querySelector("body").style.background = "#39f30b";
      getSecretNumber.style.width = "30rem";
      getSecretNumber.textContent = secretNumber;
      getScore.textContent > getHighscore.textContent
        ? (getHighscore.textContent = getScore.textContent)
        : (getButtonClick.disabled = true);
    }
  }
});

//When player click Again
getAgain.addEventListener("click", function () {
  getButtonClick.disabled = false;
  document.querySelector("body").style.background = "#222";
  getSecretNumber.style.width = "15rem";
  document.querySelector(".guess").value = "";
  getScore.textContent = 20;
  getCorrect.textContent = "Start guessing...";
  getSecretNumber.textContent = "?";
  getHighscore.textContent =
    getScore.textContent < getHighscore.textContent
      ? getScore.textContent
      : getHighscore.textContent;
  secretNumber = Math.floor(Math.random() * 20 + 1);
});
