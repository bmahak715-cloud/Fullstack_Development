function profileGenerator() {
    let name = document.getElementById("val1").value;
    let favouriteNumber = document.getElementById("val2").value;
    let isStudent = document.getElementById("val3").checked;
    let studentStatus = "a student"
    if(!isStudent) {
        studentStatus = "not a student";
    }
    console.log("My name is " + name + ", my favourite number is " + favouriteNumber + ", and I am " + studentStatus + ".");
}