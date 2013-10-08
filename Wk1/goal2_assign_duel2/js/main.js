


//Diogo Cabral - October, 8 - Goal 2 - Duel2 Assignment
//console.log("Js Working");



(function(){

//    var figther1 = ["Spiderman",100,20];
//    var figther2 = ["Batman",100,20];


//    var playerOneHealth = 100;
//    var playerTwoHealth = 100;
//
//    var playerOneDamage = 20;
//    var playerTwoDamage = 20;

    var fighter1 = ["Spiderman",100,20];
    var fighter2 = ["Batman",100,20];

    var rounds = 0;



    function fight(){
        console.log("Fight Function");


        alert("\t\t ***START GAME***\n" + fighter1[0] + ":" + fighter1[1] +  "\t\t  X  " + "\t\t" + fighter2[0] + ":" + fighter2[1]);

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
                alert("\t\t ROUND "+ rounds+ " IS OVER \n" + fighter1[0] + ":" + fighter1[1] +  " \t X " + "\t" + fighter2[0] + ":" + fighter2[1]);


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
















