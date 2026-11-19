function greet(fn){
    let str = "Hello";
    fn(str);
}

greet((str)=>{
    setTimeout(()=>{
        //something
    })
})