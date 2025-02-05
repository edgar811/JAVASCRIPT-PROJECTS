var x = 25;

function isEqual() {
    var z = 10
    console.log(z == x);
}

function isNotEquals() {
    console.log(z + 10);
}

isEqual();
isNotEquals();


//This is a function for outputting the time it is with an if statement
function what_Time() {
    if (new Date().getHours() < 18){
        document.getElementById("Daylight").innerHTML = "It is still daylight outside!";
    }
    document.getElementById("Daylight").innerHTML = "It is no longer daylight outside";
}

//This is function that will check to see if the variable x is equal to another number we put in
function small_Number() {
    var x = 7;
    if ( x == 10) {
        document.getElementById("Number").innerHTML = "The number is bigger!";
    }
    document.getElementById("Number").innerHTML = "The number is smaller!";
}

//This function takes in an input age and then returns one of the statements below depending on the age
function persons_Age() {
    Age = document.getElementById("Age").value;
    if (Age >= 25) {
        insure = "You get your insurance lowered!";
    }
    else {
        insure = "You do not get cheaper insurance!"
    }
    document.getElementById("What_is_the_age?").innerHTML = insure;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}