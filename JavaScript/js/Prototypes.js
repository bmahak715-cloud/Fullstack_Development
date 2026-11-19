let a = "GLA";
console.log(a.__proto__); 

let university = {
    name: "GLA University",
}
console.log(university);

let myuniversity = Object.create(university);
myuniversity.name = "GLA University, Mathura";
console.log(myuniversity);
console.log(myuniversity.students); // undefined because students is not defined in myuniversity or university


let obj = {
    name: "GLA University",
}
let myobj = Object.create(obj);
myobj.name = "GLA University, Mathura";
console.log(myobj.name); // GLA University, Mathura