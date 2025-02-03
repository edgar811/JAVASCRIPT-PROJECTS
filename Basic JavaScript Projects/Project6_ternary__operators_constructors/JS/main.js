function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Voter_function() {
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "You are not old enough":"You are old enough"
    document.getElementById("Vote").innerHTML = Vote + " vote!"
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + 
    " manfactured in " + Erik.Vehicle_Year;
}

//This is my function that I created for a card game
function cardGame(game) {
    this.cardGame = game;
}

//This is the players and what card games they are playing.
var Edgar = new cardGame("Magic");
var Lucas = new cardGame("Yugioh");
var Oscar = new cardGame("Pokemon");
function myCardGameFunction() {
    document.getElementById("New_and_This").innerHTML = 
    "Edgar is playing " + Edgar.cardGame;  
}

//Sport function for a new sport output
function newSport(sport) {
    this.newSport = sport;
}

//Variables for the newSport function 
var person = new newSport("Football");
var person1 = new newSport("Basketball");
function mySport() {
    document.getElementById("new sport").innerHTML = "Edgar is playing " + person.newSport; //This will output the persons nam,e and what sport they are playing
}

//Nested function for a new car 
function car() {
    document.getElementById("Nested_Function").innerHTML = newCar_Function();
    function newCar_Function() {
        var car = "BMW" //This is a variable named car that has been assigned the value of BMW 
        function outputCar() {car} //This is that nested function that will output the car variable
        outputCar();
        return car + " is what I am driving now!"; //This is where the output of the function is called and I added a string to the end of it so it becomes a sentence
    }
}