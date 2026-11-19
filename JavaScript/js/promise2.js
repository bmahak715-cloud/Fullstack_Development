const promise = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

//PROMISE COMBINATORS:- all, any, allSettled, race
Promise.all([promise, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.log(`Error: ${error}`);
});

Promise.any([promise, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.log(`Error: ${error}`);
});

Promise.allSettled([promise, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.log(`Error: ${error}`);
});

Promise.race([promise, promise2, promise3]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.log(`Error: ${error}`);
});