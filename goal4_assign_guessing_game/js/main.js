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
    var statusInfo = "";


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

    function validation(){

        inputNumber = parseInt(dom.input.value);

        if(isNaN(inputNumber)){
            dom.output.innerHTML = "Only numbers are accepted";


        }else if(inputNumber > 1 || inputNumber >10){
            dom.output.innerHTML = "You need to enter a number between 1 and 10";

        } else{
            //play();
        }



    }

    function play(){
            chancesRemain--;
            guesses++;
            statusInfo = "Chance " + guesses + "is over. You have " + chancesRemain + " more chances";

        inputNumber = parseInt(dom.input.value);



    }




})();