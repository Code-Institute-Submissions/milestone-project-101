//Delay function was copied from stackoverflow after searching for a way to add a delay into my game
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var gameState = "not playing";

$(document).ready(function() {

    $("#start-game").click(startCurrentLevel)
    $(".square").click(function() {
        handleUserClickingASquare($(this).attr("data-squareid"))
    })
});

var squareSequence = []
var userSquareSequence = []
var userScore = 0
var level = 1

async function startCurrentLevel(){
    squareSequence = [ 3, 4, 1, 2]

    await demonstrateLevelSequence(squareSequence);
}

async function demonstrateLevelSequence(squareSequence) {
    gameState = "demonstration"
    var displayDelayDuration = 2000/level
    for (square of squareSequence) {
        console.log(square);
        squareOn(square);
        await delay(displayDelayDuration).then(() => squareOff(square));
    }
    gameState = "user input"
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
    if (gameState === "user input") {
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
    startCurrentLevel()
    console.log("Win")
}

function loseGame() {
    userSquareSequence = []
    level = 1
    updateScoreAndLevel()
    gameState = "not playing";
    console.log("Lose")
}