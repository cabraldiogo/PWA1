


//Diogo Cabral - October, 01 - Goal 1 - Duel1 Assignment
//console.log("Js Working");

//Both players start off with 100 hit points (Health)
//•	To advance rounds, use the alert() function. The alert box will show the two players' remaining health and the round number.
//  Example (alert button is clicked after each round)
//   Batman: 100 **START** Spiderman 100
//   Batman: 88 **ROUND 1 OVER** Spiderman 92
//   Batman: 79 **ROUND 2 OVER** Spiderman 84
//   Batman: 5 **ROUND 9 OVER** Spiderman 11   GAME OVER Batman Wins!!!
//•	Damage occurs to both players at a random amount between half damage and maximum damage.
// So, if the player's damage variable is 50 then the amount of damage that can be inflicted will be between 25-50.
//•	Display the correct winner after the 10th round. If both players happen to die during the same round then display “No Winner Message”.
//•	Minimum of two functions.
//1.	fight() function - This function contains the code that loops through rounds and reduces the player’s health accordingly.
//2.	winnerCheck() function - This function is invoked after each round and returns a string of either the winner,
// the loser, a tie (both die) or no winner yet. This function does the conditional logic to determine if there is a winner or not.
//•	A break command is used to escape out of the loop if the fight is over before the 10 rounds is reached

(function(){

    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    var playerOneDamage = 20;
    var playerTwoDamage = 20;

    var rounds = 0;



    function fight(){
        console.log("Fight Function");

        alert("\t\t\t START GAME \n" + playerOneName + ":" + playerOneHealth +  " \t X " + "\t\t" + playerTwoName + ":" + playerTwoHealth);

        for(var i= 0; i<10; i++){
            var minDamageP1 = playerOneDamage * .5;
            var minDamageP2 = playerOneDamage * .5;
            var f1 = Math.floor(Math.random() * (playerOneDamage-minDamageP1)+minDamageP1);
            var f2 = Math.floor(Math.random() * (playerTwoDamage-minDamageP2)+minDamageP2);


            //Inflict Damage
            playerOneHealth-=f1;
            playerTwoHealth-=f2;


            console.log(playerOneName + ":" + playerOneHealth +  " \t X " + "\t\t" + playerTwoName + ":" + playerTwoHealth);

            var results = winnerCheck();
            console.log(results);

            if(results ==="No winner"){
                rounds++;
                alert("\t\t\t Round "+ rounds+ " is over \n" + playerOneName + ":" + playerOneHealth +  " \t X " + "\t\t" + playerTwoName + ":" + playerTwoHealth);


            } else{
                alert(results);
                break;

            };


        };

    };

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(playerOneHealth<0 && playerTwoHealth<0){
            result = "Game Over. You both died";


        } else if(playerOneHealth<1){
            result = playerTwoName + "Wins!"


        }else if(playerTwoHealth<1){
            result = playerOneName + "Wins!"
        };

        return result;




    };

    fight();

})();
















