//Delay function was copied from stackoverflow after searching for a way to add a delay into my game
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var gameState = "Not Playing";

$(document).ready(function() {

    $("#start-game").click(startGame)

});

async function startGame(){
    var squareSequence = [ 3, 4, 1, 2]

    await demonstrateSequence(squareSequence);
}

async function demonstrateSequence(squareSequence) {
    for (square of squareSequence) {
        console.log(square);
        squareOn(square);
        await delay(2000).then(() => squareOff(square));
    }
}

function squareOn(square) {
    $("#square-"+square).addClass("active")
    console.log("on " + square)
}

function squareOff(square) {
    $("#square-"+square).removeClass("active")
    console.log("off " + square)
}