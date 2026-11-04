let arr = ['a', 'p', 'i', 'n', 'u'];
let sum = 0;
for(let i=0;i<arr.length;i++){
    if(arr[i]=='i'||arr[i]=='u'||arr[i]=='e'||arr[i]=='o'||arr[i]=='a'){
        sum++;
    }
}
console.log(sum);