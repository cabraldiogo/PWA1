/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
//console.log("Main Js running");


    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];
    var people = [];






    function populateHTML(){};


    for( var i= 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);
        people.push(person);
        console.log(people);
        document.querySelector("#r"+rowNumber+"c1").innerHTML = people[i].name;

    }
























})();