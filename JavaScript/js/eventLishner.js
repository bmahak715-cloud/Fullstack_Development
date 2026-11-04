var counter=0;
let btn=document.getElementById("btn");
counter++;
btn.addEventLishner('click',()=>{
    console.log(counter,"button clicked");
});