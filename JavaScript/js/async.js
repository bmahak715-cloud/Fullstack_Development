async function val1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('val1');
        }, 1000);
    });
}

async function val2(str){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`val2 ${str}`);
        }, 1000);
    });
}

async function test(){
    console.log('calling');
    const result = await val1();
    const result2 = await val2(result);
    console.log(result);
    console.log(result2);
}

test('mahak');