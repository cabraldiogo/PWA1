/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */



(function(){
console.log("Person Js running");


function Person(n,r){
    this.name = n;
    this.row = r ;
    this.jobs = ["Web Developer","Web Designer","Graphic Designer", "Film Maker", "Sound Engineer"];
    this.actions = ["Running","Sleeping", "Eating", "Drawing"];
}

window.Person = Person;




})();