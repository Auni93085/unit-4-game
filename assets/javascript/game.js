$(document).ready(function() {

// Generate a random number betweem 19 and 120 and store it in var randomNum

var randomNum = Math.floor(Math.random() * 100) + 19;
console.log(randomNum);


// Generate a random number between 1 and 12 for each gem

var randomNumBlue = Math.floor(Math.random() * 12) + 1;

var randomNumGreen = Math.floor(Math.random() * 12) + 1;

var randomNumPurple = Math.floor(Math.random() * 12) + 1;

var randomNumRed = Math.floor(Math.random() * 12) + 1;

console.log (randomNumBlue, randomNumGreen, randomNumPurple, randomNumRed);


// create a variable for wins, losses, user total score. Set all to 0 to start the game

var wins = 0;

var losses = 0;

var totalScore = 0;

// add random number text to DOM
$('#randomNumText').text(randomNum);

// add wins text to DOM
$('#winsText').text(wins);

//add losses text to DOM
$('#lossesText').text(losses);

// add total score text to DOM
$('#scoreText').text(totalScore);

// function to add wins when player wins the game and add message to message div saying "you won!" and resets game
function winner() {

    $('#messageText').text("You WIN!");

    wins++;

    $('#winsText').text(wins);

    resetGame();
};

// function to add losses when player losses the game and add message to message div saying "you won!" and resets game
function loser() {

    $('#messageText').text("You LOSE!");

    losses++;

    $('#lossesText').text(losses);

    resetGame();
};

// When a gem is clicked, the random numebr is assigned 
// when each gem is clicked, if the total score is equal to the random number, run the winner function
// when each gem is clicked, if the total score is greater than random number, run the loser function 
$('.gemBlue').on('click', function() {

    totalScore = totalScore + randomNumBlue;
    console.log('random blue = ' + randomNumBlue)

    $('#scoreText').text(totalScore);
        if (totalScore === randomNum) {
            winner()
        } else if (totalScore > randomNum) {
            loser()
        } 
})

$('.gemGreen').on('click', function() {

    totalScore = totalScore + randomNumGreen;
    console.log('random green = ' + randomNumGreen)

    $('#scoreText').text(totalScore);
        if (totalScore === randomNum) {
            winner()
        } else if (totalScore > randomNum) {
            loser()
        } 
})

$('.gemPurple').on('click', function() {

    totalScore = totalScore + randomNumPurple;
    console.log('random purple = ' + randomNumPurple)

    $('#scoreText').text(totalScore);
        if (totalScore === randomNum) {
            winner()
        } else if (totalScore > randomNum) {
            loser()
        } 
})

$('.gemRed').on('click', function() {

    totalScore = totalScore + randomNumRed;
    console.log('random red = ' + randomNumRed)

    $('#scoreText').text(totalScore);
        if (totalScore === randomNum) {
            winner()
        } else if (totalScore > randomNum) {
            loser()
        } 
})

// resets the game with user wins or losses
function resetGame () {

    randomNum = Math.floor(Math.random() * 100) + 19;
        console.log ('new random number= ' + randomNum)

    randomNumBlue = Math.floor(Math.random() * 12) + 1;
        console.log ('new blue gem number= ' + randomNumBlue)

    randomNumGreen = Math.floor(Math.random() * 12) + 1;
        console.log ('new blue gem number= ' + randomNumGreen)

    randomNumPurple = Math.floor(Math.random() * 12) + 1;
        console.log ('new blue gem number= ' + randomNumPurple)

    randomNumRed = Math.floor(Math.random() * 12) + 1;
        console.log ('new blue gem number= ' + randomNumRed)

    totalScore = 0

    $('#randomNumText').text(randomNum);

    $('#scoreText').text(totalScore);
}

});