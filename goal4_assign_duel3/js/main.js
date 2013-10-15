


//Diogo Cabral - October, 10 - Goal 4 - Duel3 Assignment
//console.log("Js Working");
(function(){

     function disableButton(){
         document.querySelector(".buttonblue").disabled = true;
     }

    document.querySelector(".buttonblue").onclick  = function(){
       fight();

    };


    var fighters = [

                    {name: "IRON HEAD",
                     health: 100,
                     damage: 20
                     },

                    {name: "BOLD UGLY GUY",
                    health: 100,
                    damage: 20
                    }
    ];
     var rounds = 1;

    var topF1 = document.getElementById("kabal");
    topF1.innerHTML = fighters[0].name + " : " + fighters[0].health;

    var topF2 = document.getElementById("kratos");
    topF2.innerHTML = fighters[1].name + " : " + fighters[1].health;



    function fight(){


        document.getElementById("round").innerHTML = "Round " + rounds + " is over";


        var minDamageP1 = fighters[0].damage * .5;
        var minDamageP2 = fighters[1].damage * .5;
        var f1 = Math.floor(Math.random() * (fighters[0].damage-minDamageP1)+minDamageP1);
        var f2 = Math.floor(Math.random() * (fighters[1].damage-minDamageP2)+minDamageP2);


        fighters[0].health-=f1;
        fighters[1].health-=f2;

        var topF1 = document.getElementById("kabal");
        topF1.innerHTML = fighters[0].name + " " + fighters[0].health;

        var topF2 = document.getElementById("kratos");
        topF2.innerHTML = fighters[1].name + "  " + fighters[1].health;

            var results = winnerCheck();


            //console.log(results);
            if(results ==="No winner"){
                rounds++;

                } else {

                // Scoot I just left this comments because I want your feedback to know why this codes didn't work
                //document.getElementById("fight_box").disabled= true;
                //document.querySelector(".buttonblue").disabled = true;

                document.querySelector("#round").innerHTML = "Game Over!";
                document.querySelector("#kabal").innerHTML = results;
                document.querySelector("#kratos").innerHTML = "";
                document.querySelector(".buttonblue").onclick = disableButton();



            }

    }

    function winnerCheck(){
        //console.log("In winner check function");

        var result="No winner";

        if(fighters[0].health<0 && fighters[1].health<0){
            result = "GAME OVER!  YOU BOTH DIED";

        } else if(fighters[0].health<1){
            result = "GAME OVER! " + fighters[1].name + " WINS!"


        }else if(fighters[1].health<1){
            result = "GAME OVER! " + fighters[0].name + " WINS!"
        }

        return result;

    }
})();

























