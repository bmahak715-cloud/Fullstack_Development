function isArmstrongNumber(num) {
    let temp = num;
    let sum = 0;
    while (temp > 0) {
        let digit = temp % 10;
        sum = sum + digit * digit * digit;
        temp = Math.floor(temp / 10);
    }
    if (sum === num) {
        return true;
    } else {
        return false;
    }
}
function checkandshow() {
    let val1 = document.getElementById("val1").value;
    if (isArmstrongNumber(val1)) {
        console.log(val1 + " is an Armstrong number");
    } else {
        console.log(val1 + " is not an Armstrong number");
    }
}