//Here I will make a loop in this function that counts
function Call_Loop() {
    var count = 0;
    var text = "";

    while (count < 10){
        text += count + "<br>";
        count ++
    }
    document.getElementById("Loop").innerHTML = text;
}

//This function will find the string length
function text_Count(){
    var text = "Hello World!"
    var length = text.length;

    document.getElementById("Count").innerHTML = length;
}