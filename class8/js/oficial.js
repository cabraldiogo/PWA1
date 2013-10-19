/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/17/13
 * Time: 10:01 AM
 * To change this template use File | Settings | File Templates.
 */


(function(){


function Student(){
    this.name = "";
    this.grade =  0;
    }

    var students = [];
    var names = ["Bob", "John", "Peter","Gabriel", "Diogo"];
    var btn1 = document.querySelector("#btn1");
    var btn2 = document.querySelector("#btn2");

    //setInterval(runUpdate, 1000 / 30);


    function create(){
        var s = new Student();
        s.name = names[~~(Math.random()*students.length)];
        s.grade = ~~(Math.random()*100);
        students.push(s);

    }

    function display(){
        var counter = 1;
        students.forEach(function(e){
        console.log("Student#"+ counter);
        console.log("Name:"+ e.name);
        console.log("Grade:"+ e.grade);
        counter++;
        console.log("------------------------------");


        })

    }

    btn1.addEventListener("click",create);
    btn2.addEventListener("click",display);
















})();
