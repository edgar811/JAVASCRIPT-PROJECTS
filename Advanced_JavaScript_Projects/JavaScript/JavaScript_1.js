//This is my switch function for pet choices
function pet_Function() {
    var petChoice;
    var pet = document.getElementById("Pet").value;
    var petString = " is a great choice on this pet!";
    switch(pet) {
        case "Dog":
            petChoice = "Dog" + petString
        break;
        case "Cat":
            petChoice = "Cat" + petString;
        break;
        case "Fish":
            petChoice = "Fish" + petString;
        break;
        case "Lizard":
            petChoice = "Lizard" + petString;
        break;
        case "Bird":
            petChoice = "Bird" + petString;
        break;
        default:
            petChoice = "Please only choose from the pet listed above!";
    }
    document.getElementById("Output").innerHTML = petChoice;
}