let arr = [1,2,3,4,5];
console.log(arr);
let nArr = arr.map((n)=>{return n*n});//transform all elements of the array. jo bhi map k annder function hoga vo sare elements pr apply ho jayega.
console.log(nArr);

//we only use map when we want to apply some changes to all the elements of an array.

let prime = arr.map((n)=>{return n%2==0});
console.log(prime);

//filter returns only those elements that follows the condition.

let even = arr.filter(n=>n%2==0);
console.log(even);

//find returns only the first element in the array that meets the condition.

let findElement = arr.find(n=>n<5);
console.log(findElement);

//reduce se hum pure array ka sum ya multiplication jaisi chije nikal sakte h.

let sum = arr.reduce((sum,n) => sum+=n,0);//0 is the initial value we can keep any value the initial value.
console.log(sum);