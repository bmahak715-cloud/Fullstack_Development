function a(x){
    return function b(y){
        return function c(z){
            return x + y + z;
        }
    }
}k
console.log(a(1)(2)(3));