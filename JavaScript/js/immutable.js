let arr=[1,2,3,4,5];
//arr=brr It passes the memory address of arr to brr and does not copy arr array in brr.
//Spread operator:- spread all the element of the array
let brr = [...arr];//copies the array
brr.push(6);
console.log(brr);
brr.push(7);
console.log(arr);
console.log(brr);

let o = {name:"ABCD", age:123};
let obj = o;
obj.name = "BCDE";
console.log(o);

//Rest operator:- 
let [a,b] = [1,2];
console.log(a);
console.log(b);

let name = {fn:"Mahak", ln:"Bhatiya"};
name.ln = "Bhatia";
console.log(name);

//Destructuring
// const obj = {a:3, b:5};
// const[a1,b1] = {obj};
// console.log(a1);
// console.log(b1);
// const obj = {a:3, b:5};
// const[a1,b1] = {obj};
// console.log(a1);
//something is wrong in this code.

let [a3,b3,...c3] = [1,2,3,4,5,6,7];
console.log(a3);
console.log(b3);
console.log(c3);
function sum (...a4){
    let sum=0;
    for(v of a4){
        sum+=v;
    }
    return sum;
}
console.log(sum(1,2,3,4));

const sum1 = (...arr2)=>{return arr2.reduce((sum1,n)=>sum1+=n,0)};
console.log(sum1(1,2,3,4));

//Default parameter:- passing a default value.
function add(a,b){return a+b};
function add2(a=0,b=0){return a+b};//default values are pass in case no value is provided in the function.
console.log(add(2,4));
console.log(add2());