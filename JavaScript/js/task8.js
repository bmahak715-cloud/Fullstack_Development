function isPalindrome(){
    let str = document.getElementById("val1").value;
    let strarr = str.split("");
    let reverse = strarr.reverse();
    let reversestr = reverse.join("");
    if(str == reversestr){
        console.log("true");
    } else {
        console.log("false");
    }
}