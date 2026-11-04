
var min = 1;
var max = 100;
var random = Math.floor(Math.random() * (max - min + 1)) + min;
function GuessNumber() {
    let number = Number(document.getElementById("num").value);;
    if (number !== random) {
        if (number < random) {
            console.log("value is greater than number");
        } else if (number>random){
            console.log("value is smaller than number");
        } else{
            console.log("You guessed the correct value.");
        }
    }
}
