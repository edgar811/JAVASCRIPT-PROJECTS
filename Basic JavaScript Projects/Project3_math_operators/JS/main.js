//Math function that will add numbers
function calculateMath() {
    var num1 = 10;
    var num2 = 37;

    var sum = num1 + num2;

    //Displays the results from the function above in a paragraph
    document.getElementById("Math").innerHTML = "10 + 37 = " + sum;
}

//This function will substract the numbers
function substractNum() {
    var num3 = 36;
    var num4 = 127;

    var diff = num3 - num4;

    document.getElementById("Difference").innerHTML = "36 - 127 = " + diff;
}

function multiNum() {
    var num5 = 38;
    var num6 = 57;

    var product = num5 * num6;

    document.getElementById("Product").innerHTML = "38 * 57 = " + product;
}

function divideNum() {
    var num7 = 273;
    var num8 = 10;

    var quoti = num7 / num8;

    document.getElementById("Quotient").innerHTML = "273 / 10 = " + quoti;
}

function equationNum() {
    var simpleMath = (10 + 27) * 33 / 9 -7;

    document.getElementById("Math").innerHTML = "10 plus 27, multipled by 33, divided by 9 and then substracted by 7 equals " + simpleMath;
}

function remainderNum() {
    var leftOver = 70 % 12;

    document.getElementById("Math").innerHTML = "When you divide 70 by 12 you have a remainder of: " + leftOver;
}

function singleOperator() {
    var x = 76;
    x++;

    document.getElementById("Math").innerHTML = -x;
    document.write(x);
}

function inclementNum() {
    var w = 250;
    w++

    document.write(w);
}

function decrementNum() {
    var z = 99;
    z--

    document.write(z);
}

window.alert(Math.random() * 100);

function roundUp() {
    document.getElementById("Math").innerHTML = Math.ceil(9.21);
}