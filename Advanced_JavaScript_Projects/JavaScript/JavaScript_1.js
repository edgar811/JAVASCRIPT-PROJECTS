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

function changeText() {
    let elements = document.getElementsByClassName("example");
    for (let item of elements) {
        item.textContent = "This is the new sentence!";
    }
}

//This function is for the CANVAS CHALLENGE
function drawGradient() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 200, 0);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(10, 10, 150, 80);
}

drawGradient();

//This function is for the GRADIENT COLOR CHALLENGE
function drawGradientRectangle() {
    const canvas = document.getElementById("myCanvas2");
    const ctx = canvas.getContext("2d");

    const grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(20, 20, 150, 100);
}

drawGradientRectangle();
