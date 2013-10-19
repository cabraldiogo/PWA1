/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/17/13
 * Time: 9:08 AM
 * To change this template use File | Settings | File Templates.
 */


(function(){

    var dom = {
        btn1: document.querySelector("#btn1"),
        btn2: document.querySelector("#btn2")


    };

    var displayData = function (){
        console.log(studentsInfo);


    }


    dom.btn1.addEventListener("click",Student);
    dom.btn2.addEventListener("click", displayData);

    var grade = Math.floor(Math.random()* 100 +1);

var studentsName = ["Diogo","Gabriel", "Kareem", "Antonio", "Julian", "Emmanuel"];

var studentsInfo = [];




function Student(n,g){
    this.name = n;
    this.grade = g;

  }


    console.log(utils.getArea(4,5));


var newStudent = new Student("Teste",grade);
    studentsInfo.push(newStudent);

    console.log(studentsInfo);










})();