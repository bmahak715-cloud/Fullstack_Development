function trafficlight() {
    let color = document.getElementById("val1").value;
    if(color == "red"){
        console.log("stop");
    }else if(color == "yellow"){
        console.log("slow down");
    }else{
        console.log("go");
    }
}