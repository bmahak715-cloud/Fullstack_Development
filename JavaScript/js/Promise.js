const res = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return reject("Hello");
    },2000)
});

res.then(res=>{//if it is resolving then it will go to then block
    console.log(res);
}).catch(res=>{
    console.log(`Error: ${res}`);//if it is rejecting then it will go to catch block
}).finally(()=>{
    console.log("finally");
})
//MDN JS EXAMPLE:
// const fetchPromise = fetch(
//   "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
// );

// console.log(fetchPromise);

// fetchPromise.then((response) => {
//   console.log(`Received response: ${response.status}`);
// });

// console.log("Started request…");