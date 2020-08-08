//Delay function was copied from stackoverflow after searching for a way to add a delay into my game
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var gameState = "Not Playing";

$(document).ready(function() {

    $("#start-game").click(startGame)
    $(".square").click(function() {
        handleUserClickingASquare($(this).attr("data-squareid"))
    })
});

var squareSequence = []
var userSquareSequence = []
var userScore = 0
var level = 1

async function startGame(){
    squareSequence = [ 3, 4, 1, 2]

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

function handleUserClickingASquare(clickedSquare) {
    userSquareSequence.push(parseInt(clickedSquare));
    console.log(userSquareSequence)
    console.log(squareSequence)
    if (userSquareSequence.length === squareSequence.length) {
        if (JSON.stringify(userSquareSequence) === JSON.stringify(squareSequence)) {
            winLevel()
        } else {
            loseGame()
        }
    }
}

function updateScoreAndLevel() {
    userScore = (level-1)*100
    $("#user-score").text(userScore)
    $("#level").text(level)
}

function winLevel() {
    userSquareSequence = []
    level++
    updateScoreAndLevel()
    console.log("Win")
}

function loseGame() {
    userSquareSequence = []
    level = 1
    updateScoreAndLevel()
    console.log("Lose")
}