


//Diogo Cabral - October, 10 - Goal 4 - Duel3 Assignment
//console.log("Js Working");
(function(){


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

    document.getElementById("kabal").innerHTML = fighters[0].name;
    document.getElementById("kratos").innerHTML = fighters[1].name;


    function fight(){

        document.getElementById("kabal").innerHTML = fighters[0].name;
        document.getElementById("round").innerHTML = "Round " + rounds + " is over";


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
//                alert(results);
                document.querySelector("#round").innerHTML = results;

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
})();






















