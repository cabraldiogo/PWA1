


//Diogo Cabral - October, 10 - Goal 4 - Duel3 Assignment
//console.log("Js Working");

//  Open the JavaScript file of part I
//  Replace the variables that reference the name, health, and damage with an array. You will do this for both players.
//  example: var fighter1 = ["Spiderman", 20, 100];
//  Modify the remaining code so that it works with the arrays instead of the variables that were used in part I of the assignment


    document.querySelector(".buttonblue").onclick  = function(){
       fight();
    };

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
        document.getElementById("round").innerHTML = "New round";

        var minDamageP1 = fighters[0].damage * .5;
        var minDamageP2 = fighters[1].damage * .5;
        var f1 = Math.floor(Math.random() * (fighters[0].damage-minDamageP1)+minDamageP1);
        var f2 = Math.floor(Math.random() * (fighters[1].damage-minDamageP2)+minDamageP2);

        fighters[0].health-=f1;
        fighters[1].health-=f2;

            var results = winnerCheck();
            console.log(results);

            if(results ==="No winner"){
                rounds++;



            } else{
                alert(results);


            }




    }

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(fighters[0].health<0 && fighters[1].health<0){
            result = "Game Over. You both died";


        } else if(fighters[0].health<1){
            result = fighters[1] + "Wins!"


        }else if(fighters[1]<1){
            result = fighters[0].health + "Wins!"
        }

        return result;




    }

    //fight();


    document.getElementsByTagName("a").onclick=(console.log("OK"));


















