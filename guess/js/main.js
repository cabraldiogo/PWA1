/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/15/13
 * Time: 9:18 AM
 * To change this template use File | Settings | File Templates.
 */


var playersGuess = 0;
var guessesRemaining = 3;
var guessesMade = 0;
var gameState = 0;

var dom = {

    input: document.querySelector("#input"),
    output: document.querySelector("#ouput"),
    button: document.querySelector("#button")





};

// the random will be a decimal number so we * by 10, the floor(to round up)
// the 1 at end says to start at 1
var magicNum = Math.floor(Math.random()* 10 +1);

var clickFn = function(e){
    console.log(guessesRemaining.input.value);
    validateInput();

};

var validateInput = function(){
    playersGuess = parseInt(dom.input.value);

    if(isNaN(playersGuess)){
        dom.input.innerHTML = "Please enter a number";



    }   else if(playersGuess < 1 || playersGuess > 10){
        dom.input.innerHTML = "Please enter a number between 1 and 10";

    }else{
        playGame();
    }



};

var playGame = function(){
    guessesRemaining--;
    guessesMade++;
    gameState = "Guess: " + guessesMade + ", Remaining" + guessesRemaining;

    playersGuess = parseInt(dom.input.value);

    if(playersGuess > magicNum){
        dom.output.innerHTML = "That's too high" + gameState;


    }   else if(playersGuess < magicNum){
        dom.output.innerHTML = "That's too low" + gameState;

    }  else if(playersGuess === magicNum){
        gameOver(true);

    }

      if(guessesRemaining < 1){
          console.log("Game Over : guessesRemaining is < 1");
          gameOver(false);
      }
};


var gameOver = function (win){
    if(win){
        dom.output.innerHTML = "Yes it's  " + magicNum + " !" + "<br>"
        + "It only took you " + guessesMade + " guesses.";
    } else{
        dom.output.innerHTML = "No more guesses left! " + "<br>"
        + "The number was " + magicNum;
    }
};




dom.button.removeEventListener("click", clickFn, false);

// option 2
// dom.button.disabled = true;

// option 3 disable the input field (needed with option 2)
// dom.input.disabled = true;



