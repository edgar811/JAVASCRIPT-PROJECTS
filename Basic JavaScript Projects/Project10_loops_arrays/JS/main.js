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

function for_Loop() {
    let instruments = ["Guitar", "Piano", "Drums", "Violin", "Flute"];
    let content = ""; // Initialize an empty string
    for (let i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>"; // Add each instrument to the string with a line break
    }
    document.getElementById("List_of_Instruments").innerHTML = content; // Display the list in the paragraph
}

function array_Function() {
    var x = []
    x[0] = "Lets go!";
    x[1] = "You can do it!";
    x[2] = "I am fast as fuck boy!";
    document.getElementById("Array").innerHTML = "The favorite saying of the day is " + x[1] + x[2];
}

//Listing the constant outside of the function
const niceCar = {
    type: "Audi",
    color: "Red",
    housePower: "2000"
};
//This is a function for a constant 
function constant_Function() {
    document.getElementById("Constant").innerHTML = niceCar.type + " "+ niceCar.color;

    //These are the new values and added values. The above code will not print out anymore 
    niceCar.housePower = "1500";
    niceCar.color = "Blue";
    niceCar.numberDoors = "2";

    document.getElementById("Constant").innerHTML = niceCar.color + " " + niceCar.housePower + " " + niceCar.numberDoors;
}

// Declare a let variable
let favoriteSport = "Football"; 

function displaySport() {
    document.getElementById("Sport").innerHTML = "My favorite sport is: " + favoriteSport + ".";
}

function returnFunction(a, b) {
    return a * b;
}

function displayResult() {
    // Call returnFunction with arguments
    let x = returnFunction(9, 5);

    // Update the content of the paragraph with id="Math"
    document.getElementById("Math").innerHTML = "The result is: " + x;
}

let mtgCards = {
    name: "Shivan Dragon",
    type: "Dragon",
    power: 5,
    toughness: 5,
    ability: "Flying",

    displayDetails: function() {
        return "This magic card is a " + this.name + this.type;
    }


}
document.getElementById("Card").innerHTML = mtgCards.type;

// Function for break example
function runBreakLoop() {
    let output = '';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            break; // Breaks the loop when i equals 5
        }
        output += i + ' ';
    }
    document.getElementById('breakOutput').innerText = 'Break Loop Output: ' + output;
}

// Function for continue example
function runContinueLoop() {
    let output = '';
    for (let i = 0; i < 10; i++) {
        if (i === 5) {
            continue; // Skips the current iteration when i equals 5
        }
        output += i + ' ';
    }
    document.getElementById('continueOutput').innerText = 'Continue Loop Output: ' + output;
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

 


