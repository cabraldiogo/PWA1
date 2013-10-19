/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */



(function(){


    Person.jobs = ["Web Developer","Web Designer","Graphic Designer", "Film Maker", "Sound Engineer"];
    Person.actions = ["Running","Sleeping", "Eating", "Drawing"];

    Person.prototype.update = function(){
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

    };



    function Person(n,r){
    this.name = n;
    this.row = r;
    this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];
    this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];
    }



    window.Person = Person;




})();