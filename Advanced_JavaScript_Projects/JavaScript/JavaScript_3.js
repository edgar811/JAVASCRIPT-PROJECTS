function showMtgCards(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is the best " + character.innerHTML + " to use!");
}