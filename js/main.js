/**
 * Generates a random number for a die roll between 1 and a given max
 * @param {number} maxRoll The inclusive upper bound
 */
function getDieRoll(maxRoll){
    return Math.floor(Math.random() * maxRoll) + 1;
}

function roll(){
    let myRoll = getDieRoll(6);
    displayDie(6, myRoll);
}

/**
 * Displays a single die on the web page
 * @param {number} typeOfDie The number of sides for the die
 * @param {number} valueRolled The rolled value for the die
 */
function displayDie(typeOfDie, valueRolled){
    let diceDisplayDiv = document.getElementById("display-die");

    // Template Literal String
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals?retiredLocale=vi
    diceDisplayDiv.innerHTML = `<p>You used a ${typeOfDie} sided die. Rolled a ${valueRolled}`;
}