//WAP using setTimeout, set Interval and getElementById to create a timer of 15 minute.
var totalSec = 15*60;
setInterval(()=>{
    totalSec-=1;
    updateTimer();
},1000);
function updateTimer(){
    let sec = totalSec%60;
    let min = Number.parseInt(totalSec/60);
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
};
updateTimer();