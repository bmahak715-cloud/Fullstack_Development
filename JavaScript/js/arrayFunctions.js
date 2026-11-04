let arr = [1, 2, 3, 4, 5];
console.log(arr);

//MAP
let newArr = arr.map(n=>n*n);
console.log(newArr);

//FILTER
let filterArr = arr.filter(n=>n%2==0);
console.log(filterArr);

//FIND
let findArr = arr.find(n=>n>3);//FIND ELEMENT GREATER THAN 3
console.log(findArr);//RETURNS THE FIND ELEMENT THAT SATISFIES THE CONDITION.

//REDUCE
let reduceArr = arr.reduce((acc, curr)=>acc+curr, 0);//REDUCE FUNCTION TAKES TWO PARAMETERS, ACCUMULATOR AND CURRENT VALUE. IT ADDS ALL THE ELEMENTS OF THE ARRAY AND RETURNS THE SUM.
console.log(reduceArr);