function factorial(fn){
    const cache = {};
    return function fact(n){
        const key = n;
        if(cache[key]){
            console.log('Fetching from cache');
            return cache[key];
        }
        const result = n*fn(n-1);
        cache[key] = result;
        return result;
    }
}
const fact = factorial(function(n){
    if(n <= 0){
        return 1;
    }
    return n*fact(n-1);
});
console.log(fact(5));