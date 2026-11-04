function outer(){
    let a=9;
    function inner(){
        console.log(a);
    }
    return inner();
}
outer();

function manageClosure(){
    let c = 0;
    function increment(){
        c++;
        console.log(c);
    }
    function decrement(){
        c--;
        console.log(c);
    }
    return {
        increment: increment,
        decrement: decrement
    };
}
const a = manageClosure();
a.increment();
a.decrement();