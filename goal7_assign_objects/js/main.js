/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function(){
//console.log("Main Js running");


    var names = ["Diogo", "Gabriel", "Kareem", "Antonio", "Scott"];
    var people = [];

   function Person(n,r){
       this.name = n;
       this.row = r
   }


    for( var i= 0; i<3;i++){
        var index = Math.floor(Math.random()*names.length);
        var rowNumber = i+1;
        var person = new Person(names[index],rowNumber);
        console.log("Name: "+ person.name + "  Row#: " + rowNumber  );
    }






















})();