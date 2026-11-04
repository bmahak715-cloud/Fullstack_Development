
function Game() {
    let player = document.getElementById("choice").value.toLowerCase();
    let choices = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*3);
    let computer = choices[random];
    if (player == computer) {
        console.log("tie!");
    }
    else if (
        (player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")
    ) {
        console.log("win!👑👑");
    }
    else {
        console.log("lose!😔😔");
    }
}