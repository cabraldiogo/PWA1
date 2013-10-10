


//Diogo Cabral - October, 10 - Goal 4 - Duel3 Assignment
//console.log("Js Working");

//  Open the JavaScript file of part I
//  Replace the variables that reference the name, health, and damage with an array. You will do this for both players.
//  example: var fighter1 = ["Spiderman", 20, 100];
//  Modify the remaining code so that it works with the arrays instead of the variables that were used in part I of the assignment



(function(){



    var rounds = 0;

    var fighters = [

                    {name: "Spiderman",
                     health: 100,
                     damage: 20
                     },

                    {name: "Batman",
                    health: 100,
                    damage: 20
                    }

    ];







    function fight(){
        console.log("Fight Function");




        for(var i= 0; i<10; i++){
            var minDamageP1 = fighter1[2] * .5;
            var minDamageP2 = fighter2[2] * .5;
            var f1 = Math.floor(Math.random() * (fighter1[2]-minDamageP1)+minDamageP1);
            var f2 = Math.floor(Math.random() * (fighter2[2]-minDamageP2)+minDamageP2);


            //Inflict Damage
            fighter1[1]-=f1;
            fighter2[1]-=f2;


            console.log(fighter1[0] + ":" + fighter1[1] +  " \t X " + "\t\t" + fighter2[0] + ":" + fighter2[1]);

            var results = winnerCheck();
            console.log(results);

            if(results ==="No winner"){
                rounds++;



            } else{
                alert(results);
                break;

            }


        }

    }

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(fighter1[1]<0 && fighter2[1]<0){
            result = "Game Over. You both died";


        } else if(fighter1[1]<1){
            result = fighter2[0] + "Wins!"


        }else if(fighter2[1]<1){
            result = fighter1[0] + "Wins!"
        }

        return result;




    }

    fight();

})();
















