/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
//console.log("Main Js running");


    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];
    var people = [];






    function populateHTML(n,r){

        document.querySelector("#r"+r+"c1").innerHTML = n.name;
        document.querySelector("#r"+r+"c2").innerHTML = person.jobs[Math.floor(Math.random()*5)];
    }



    for( var i = 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);
        //console.log(person);

        people.push(person);
        names.splice(index,1);

        populateHTML(people[i],rowNumber);

    }





























})();