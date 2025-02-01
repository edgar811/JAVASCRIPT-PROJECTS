// Type Coercion Examples

// Implicit Coercion (JavaScript automatically converts types)
let numberString = "5" + 10;  // "5" (string) + 10 (number) → "510" (string)
let booleanNumber = true + 2; // true (1) + 2 → 3 (number)
let nullAddition = null + 5;  // null (0) + 5 → 5 (number)

// Explicit Coercion (Manually converting types)
let stringToNumber = Number("123"); // Converts string "123" to number 123
let numberToString = String(456);   // Converts number 456 to string "456"
let booleanToString = String(false); // Converts false to "false"

// Function to display type coercion results in HTML
function showTypeCoercion() {
    document.getElementById("coercionOutput").innerHTML = 
        `"5" + 10 = ${numberString} <br> 
         true + 2 = ${booleanNumber} <br> 
         null + 5 = ${nullAddition} <br>
         String to Number: "123" → ${stringToNumber} <br>
         Number to String: 456 → "${numberToString}" <br>
         Boolean to String: false → "${booleanToString}"`;
}


// Function to display NaN (Not a Number)
function showNaN() {
    let result = 0 / 0; // Division of a number by a string results in NaN
    document.getElementById("NaNOutput").innerHTML = "Result: " + result;
}

// Function to check if a value is NaN and return true
function checkIsNaNTrue() {
    let value = "Hello" * 2; // This results in NaN
    document.getElementById("isNaNTrue").innerHTML = "isNaN('Hello'): " + isNaN(value);
}

// Function to check if a number is NaN and return false
function checkIsNaNFalse() {
    let number = 100; // This is a valid number
    document.getElementById("isNaNFalse").innerHTML = "isNaN(100): " + isNaN(number);
}

// Function to display positive Infinity
function showInfinity() {
    let largeNumber = 1e308 * 2; // A number too large for JavaScript to handle
    document.getElementById("infinityOutput").innerHTML = "Large Number: " + largeNumber;
}

// Function to display negative Infinity
function showNegativeInfinity() {
    let negativeNumber = -1e308 * 2; // A very large negative number
    document.getElementById("negativeInfinityOutput").innerHTML = "Negative Number: " + negativeNumber;
}

//Function to display boolean true
function trueStatement() {
    var num1 = 10;
    var num2 = 15;

    document.getElementById("Math").innerHTML = num1 < num2;
}

//Function to display boolean false
function falseStatement() {
    var num3 = 1;
    var num4 = 150;

    document.getElementById("Math1").innerHTML = num3 > num4;
}

let num = 16; //Assigns the number value 16 to num
let num1 = 25; //Assigns the number value 25 to num1

let results = num + num1; //Adds num and num1 together
console.log(results); //Prints out the sum of num and num1 on the console

let compares = num > num1; //Compares num and num1 to see if num is greater than num1
console.log(compares); //Prints out what the results of num and num1 to see if it is greater than on the console

let equals = num == num1; //Compares num and num1 to see if they are both the same
console.log(equals); //Prints out false to the console since num and num1 are not the same 

// Function to return true (same data type and same value)
function returnTrue() {
    let result = (10 === 10); // Both are numbers and equal
    document.getElementById("trueResult").innerHTML = "10 === 10: " + result;
}

// Function to return false (different data type and different value)
function returnFalseDifferentTypeAndValue() {
    let result = (10 === "Hello"); // Number vs. String → false
    document.getElementById("falseTypeValue").innerHTML = '10 === "Hello": ' + result;
}

// Function to return false (different data type but same value)
function returnFalseDifferentTypeSameValue() {
    let result = (10 === "10"); // Number vs. String with same value → false
    document.getElementById("falseTypeSameValue").innerHTML = '10 === "10": ' + result;
}

// Function to return false (same data type but different value)
function returnFalseSameTypeDifferentValue() {
    let result = (10 === 5); // Both numbers but different values → false
    document.getElementById("falseSameTypeValue").innerHTML = "10 === 5: " + result;
}


// Function to return true using AND (&&) - both conditions must be true
function andTrue() {
    let result = (10 > 5 && 8 < 12); // True because both conditions are true
    document.getElementById("andTrueOutput").innerHTML = "10 > 5 && 8 < 12: " + result;
}

// Function to return false using AND (&&) - one condition is false
function andFalse() {
    let result = (10 > 5 && 8 > 12); // False because 8 > 12 is false
    document.getElementById("andFalseOutput").innerHTML = "10 > 5 && 8 > 12: " + result;
}

// Function to return true using OR (||) - at least one condition must be true
function orTrue() {
    let result = (10 < 5 || 8 < 12); // True because 8 < 12 is true
    document.getElementById("orTrueOutput").innerHTML = "10 < 5 || 8 < 12: " + result;
}

// Function to return false using OR (||) - both conditions are false
function orFalse() {
    let result = (10 < 5 || 8 > 12); // False because both conditions are false
    document.getElementById("orFalseOutput").innerHTML = "10 < 5 || 8 > 12: " + result;
}

// Function to return true using NOT (!)
function notTrue() {
    let result = !(10 < 5); // 10 < 5 is false, so !false becomes true
    document.getElementById("notTrueOutput").innerHTML = "!(10 < 5): " + result;
}

// Function to return false using NOT (!)
function notFalse() {
    let result = !(10 > 5); // 10 > 5 is true, so !true becomes false
    document.getElementById("notFalseOutput").innerHTML = "!(10 > 5): " + result;
}
