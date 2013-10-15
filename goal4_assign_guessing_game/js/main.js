/**
 * GUESSING GAME:
 *
 * Created By: 
 * Date: 
 * 
 * GUESSING GAME
 */

//Game variables
(function () {

    var inputNumber = 0;
    var chancesRemain = 3;
    var guesses = 0;


    var dom = {

        input: document.querySelector("#input"),
        output: document.querySelector("#ouput"),
        button: document.querySelector("#btn")

    };

    var genNumber = Math.floor(Math.random()* 10 +1);
    //console.log(genNumber);

    dom.button.addEventListener("click",clickFn);

    function clickFn(){

        console.log("click function");
    }






})();