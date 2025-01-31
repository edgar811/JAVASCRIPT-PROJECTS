function newDictionary() {
    var mage = {
        "Race": "NightElf",
        "Color": "Blue",
        "Spec": "Arcane",
        "Spell": "Arcane Blast",
    };
    delete mage.Color
    document.getElementById("Dictionary").innerHTML = mage.Color;
}