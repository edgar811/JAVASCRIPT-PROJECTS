// This function will print a full name by combining the first and last name 
function updatedName() {
    //Assigning two variables 
    var firstName = "Edgar";
    var lastName= "Gonzalez";

    //Combinig the variables from above first and last name
    var fullName = firstName + " " + lastName;

    //Updating the HTML with fullName variable
    document.getElementById("output").innerHTML = fullName;
}

function newSentence() {
    var sentence = "I am so happy with";
    sentence += " my choice to join the Tech Academy!";
    document.getElementById("Concatenate").innerHTML = sentence;
}