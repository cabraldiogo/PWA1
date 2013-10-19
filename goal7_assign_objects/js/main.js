/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

//DIOGO CABRAL, October, 19

(function(){
//console.log("Main Js running");

    //Array that contain at least five names
    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];

    //This variable will be populate by the  for loop.
    var people = [];

     //This loop will populate the people array with 3 random names, without repeating any name
    for( var i = 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);

        //This push a name to names array
        people.push(person);

        //This method take out the used name from the initial names array
        names.splice(index,1);

    }
     //This function display the name, job and action at the HTML  the first time.
    function populateHTML(){
         for(var i= 0; i<people.length;i++){
            document.querySelector("#r"+(i+1)+"c1").innerHTML = people[i].name;
            document.querySelector("#r"+(i+1)+"c2").innerHTML = people[i].job;
            document.querySelector("#r"+(i+1)+"c3").innerHTML = people[i].action;
         }
    }

    //Calling the function
    populateHTML();

    //This function runs every 3 seconds according to the interval. It calls the update function and the populateHTML function
    function runUpdate(){

            people.forEach(function(person){
             person.update();
        });


        populateHTML();

    }

    //This interval call the runUpdate function every 3 seconds
    setInterval(runUpdate, 3000);



})();