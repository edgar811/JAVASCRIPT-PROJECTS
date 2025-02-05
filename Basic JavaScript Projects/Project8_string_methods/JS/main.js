//This function combines all of the variables and makes a whole sentence with them
function connecting_Strings() {
    var number1 = "I am making "
    var number2 = "this into "
    var number3 = "one whole sentence!"
    var allNumbers = number1.concat(number2, number3);
    document.getElementById("Concatenate").innerHTML = allNumbers;
}

//This function will use the strong slice method to display a part of the string
function slice_Method() {
    var words = "Here we are going to just display a section of this string!";
    var cut = words.slice(10, 22);
    document.getElementById("Slice").innerHTML = cut;
}

//This function will be used to convert text to uppercase
function convertToUpperCase() {
    var text = "The pet shop is open!";
    var upperText = text.toUpperCase();
    document.getElementById("upperCaseOutput").innerHTML = upperText;
}

//This function will search for a word in the string 
function searchWord() {
    var sentence = "Here will be searching for one of the words in this sentence!";
    var spot = sentence.search("one")
    document.getElementById("searchOutput").innerHTML = spot;
}

//This function will return a integer as a string
function number2word() {
    var x = 3289;
    document.getElementById("Word").innerHTML = x.toString();
}

//This function will make a long number precision
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

//This function will use the toFixed method to make a number a string rounded to a specific decimal
function fix_Number() {
    var x = 8.93652;
    document.getElementById("Fixed").innerHTML = x.toFixed(2);
}

//This function will use the valueOf method
function value_Method() {
    var text = "Hello World!";
    document.getElementById("Value").innerHTML = text.valueOf();
}