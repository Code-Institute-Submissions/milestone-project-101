//Delay function was copied from stackoverflow after searching for a way to add a delay into my game
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//Copied from the internet from an answer on generating a random number within a range
function randomIntFromInterval(min, max) { return Math.floor(Math.random() * (max - min + 1) + min); } 

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
var highScore = 0

async function startCurrentLevel(){
    $("#start-game").css('visibility','hidden')
    squareSequence = Array(4).fill().map(() => randomIntFromInterval(1,4))

    await demonstrateLevelSequence(squareSequence);
}

async function demonstrateLevelSequence(squareSequence) {
    await delay(1000);
    $(".square").removeClass("active");
    gameState = "demonstration"
    $("#user-instruction").text("Watch the squares carefully!")
    var displayDelayDuration = 2000/level
    for (square of squareSequence) {
        console.log(square);
        squareOn(square);
        await delay(displayDelayDuration).then(() => squareOff(square));
        await delay(400);
    }
    gameState = "user input"
    $("#user-instruction").text("Now it's your turn to repeat the sequence!")
    $(".square").mouseover(function() {
        $(this).addClass("active");
    });
    $(".square").mouseout(function() {
        $(this).removeClass("active");
    });
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
    userScore = userScore+((level-1)*100)
    $("#user-score").text(userScore)
    $("#level").text(level)
}

function winLevel() {
    userSquareSequence = []
    level++
    updateScoreAndLevel()
    updateHighScore()
    startCurrentLevel()
    $(".square").unbind("mouseover mouseout");
    console.log("Win")
}

function loseGame() {
    $("#user-instruction").text("You lose! Please try again")
    $("#start-game").css('visibility','visible')
    userSquareSequence = []
    level = 1
    userScore = 0
    updateScoreAndLevel()
    gameState = "not playing";
    $(".square").unbind("mouseover mouseout");
    console.log("Lose")
}

function updateHighScore() {
    if (userScore > highScore) {
        highScore = userScore
        $("#user-instruction").text("New High Score!!")
        $("#high-score").text(highScore);
    }
    
}

