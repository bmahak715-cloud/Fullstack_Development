// let arr = [1,2,3,4,5];
// console.log(arr);

// arr.push(6);
// console.log(arr);

// arr.upshift(0);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift(arr);
// console.log(arr);

// arr.foo = "hello";
// conxole.log(arr);

// let arr = [1,2,3,4,5,null,undefined];
// console.log(arr.indexOf(undefined));

// let arr2 = [1,2,3,4,5,null,];
// console.log(arr2.indexOf(undefined));

// let price =100,quantity;
// let total=priceNumber.parseInt(quantity??1);
// console.log total

// let obj={
//     name:"mahak",
//     location:{
//         city:"Mathura"
//     }
// };
// console.log (obj.location.state??="UP");
// console.log (obj);

// console.log("Inner Text:",document.getElementById("p").innerText);
// console.log("Text content: ",document.getElementById("p").textContent);

let btn = document.getElementById("btn");
let p = document.getElementById("p");
btn.addEventLishener('click',()=>{
    p.classList.toggle('hide');
})