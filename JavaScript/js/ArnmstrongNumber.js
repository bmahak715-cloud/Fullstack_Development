const isArmstrongNumber = (num) => {
    let digits = String(num).split("");
    let sum = 0;

    digits.forEach((digit) => {
        sum = sum + Number(digit) ** 3;
    });

    return sum === Number(num);
};

const checkandshow = () => {
    let val1 = document.getElementById("val1").value;

    if (isArmstrongNumber(val1)) {
        console.log(val1 + " is an Armstrong number");
    } else {
        console.log(val1 + " is not an Armstrong number");
    }
};