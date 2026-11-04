function factorial(){
    let num = document.getElementById("val1").value;
    let fact = 1;
    while(num > 0){
        fact*=num;
        num--;
    }
    console.log(fact);
}