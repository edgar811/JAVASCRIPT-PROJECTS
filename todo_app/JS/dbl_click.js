function changeText() {
    document.getElementById("text").innerHTML = "Congrats it is working properly!!";
}


function getNumberFact(){
    fetch('http://numbersapi.com/random/trivia')
    .then(response => response.text())
    .then(fact => {
        document.getElementById('factDisplay').textContent = fact;
    })
    .catch(error => {
        document.getElementById('factDisplay').textContent = "Error fetching fact.";
    })
}


