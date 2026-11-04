
// Get HTML elements

let ball = document.getElementById("ball");

let startBtn = document.getElementById("startBtn");
let hitBtn = document.getElementById("hitBtn");

let runsElement = document.getElementById("runs");
let neededElement = document.getElementById("needed");
let ballsElement = document.getElementById("balls");
let wicketsElement = document.getElementById("wickets");

let commentary = document.getElementById("commentary");
let result = document.getElementById("result");

let difficulty = document.getElementById("difficulty");
let bestScoreElement = document.getElementById("bestScore");


// Variables

let runs = 0;
let ballsUsed = 0;
let wickets = 0;

let ballPosition = 5;
let speed = 1;

let timer;
let nextBall;

let ballActive = false;
let gameStarted = false;


// Best score

let bestScore = Number(localStorage.getItem("lastOverBestScore")) || 0;

bestScoreElement.textContent = bestScore;


// Update scoreboard

function updateScore() {

    runsElement.textContent = runs;
    neededElement.textContent = Math.max(0, 12 - runs);
    ballsElement.textContent = 6 - ballsUsed;
    wicketsElement.textContent = wickets;

}


// Start game

function startGame() {

    clearInterval(timer);
    clearTimeout(nextBall);

    runs = 0;
    ballsUsed = 0;
    wickets = 0;

    gameStarted = true;

    updateScore();

    result.textContent = "";

    startBtn.textContent = "Restart Game";

    if (difficulty.value == "easy") {
        speed = 0.7;
    }
    else if (difficulty.value == "medium") {
        speed = 1.2;
    }
    else {
        speed = 2;
    }

    commentary.textContent = "First ball is coming!";

    startBall();

}


// Move ball

function startBall() {

    ballPosition = 5;

    ball.style.display = "block";
    ball.style.left = ballPosition + "%";

    ballActive = true;

    hitBtn.disabled = false;

    timer = setInterval(function() {

        ballPosition = ballPosition + speed;

        ball.style.left = ballPosition + "%";

        if (ballPosition >= 90) {

            clearInterval(timer);

            ball.style.display = "none";

            ballActive = false;

            hitBtn.disabled = true;

            let chance = Math.random();

            if (chance < 0.2) {
                finishBall(0, true, "OUT! Wicket!");
            }
            else {
                finishBall(0, false, "Dot ball!");
            }

        }

    }, 30);

}


// Hit ball

function hitShot() {

    if (ballActive == false) {
        return;
    }

    let difference = Math.abs(ballPosition - 75);

    if (difference <= 3) {
        finishBall(6, false, "SIX! Amazing shot!");
    }

    else if (difference <= 9) {
        finishBall(4, false, "FOUR! Great shot!");
    }

    else {
        finishBall(1, false, "One run!");
    }

}


// Finish ball

function finishBall(score, isWicket, message) {

    clearInterval(timer);

    ballActive = false;

    ball.style.display = "none";

    hitBtn.disabled = true;

    ballsUsed++;

    if (isWicket) {
        wickets++;
    }
    else {
        runs = runs + score;
    }

    updateScore();

    commentary.textContent = message;


    if (runs >= 12) {
        endGame(true);
    }

    else if (ballsUsed >= 6 || wickets >= 2) {
        endGame(false);
    }

    else {

        nextBall = setTimeout(function() {
            startBall();
        }, 1000);

    }

}


// End game

function endGame(won) {

    gameStarted = false;

    clearInterval(timer);
    clearTimeout(nextBall);

    ballActive = false;

    hitBtn.disabled = true;

    ball.style.display = "none";

    if (won) {
        result.textContent = "🏆 YOU WON!";
    }
    else {
        result.textContent = "GAME OVER! TRY AGAIN!";
    }

    if (runs > bestScore) {

        bestScore = runs;

        localStorage.setItem("lastOverBestScore", bestScore);

        bestScoreElement.textContent = bestScore;

    }

}


// Start button

startBtn.addEventListener("click", function() {

    startGame();

});


// Hit button

hitBtn.addEventListener("click", function() {

    hitShot();

});


// Spacebar

document.addEventListener("keydown", function(event) {

    if (event.code == "Space") {

        event.preventDefault();

        hitShot();

    }

});
