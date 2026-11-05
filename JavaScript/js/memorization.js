function memoize(fn){
    const cache = {};//it will never be rewritten and it is a global variable for the add function
    return function(x, y){
        const key = `${x},${y}`;//if key is already present in the cache then it will return the value from the cache otherwise it will calculate the value and store it in the cache
        if (cache[key]) {
            console.log('Fetching from cache');
            return cache[key];
        }
        const result = fn(x, y);
        cache[key] = result;
        return result;
    }
}
const add = memoize(function(x, y) {
    return x + y;
});
console.log(add(1, 2));
console.log(add(1, 2));