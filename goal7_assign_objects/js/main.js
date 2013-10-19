/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
//console.log("Main Js running");


    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];
    var people = [];
    console.log(people);

    for( var i = 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);
        //console.log(person);

        people.push(person);
        names.splice(index,1);

        //populateHTML(people[i],rowNumber);

    }

    function populateHTML(){
         for(var i= 0; i<people.length;i++){
        document.querySelector("#r"+(i+1)+"c1").innerHTML = people[i].name;
        document.querySelector("#r"+(i+1)+"c2").innerHTML = people[i].job;
        document.querySelector("#r"+(i+1)+"c3").innerHTML = people[i].action;


         }
    }


    populateHTML();

    //console.log(people);

   //console.log(utils.getArea(4,5));

























})();