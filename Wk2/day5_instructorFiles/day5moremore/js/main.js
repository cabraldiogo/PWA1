/**
 * Created with JetBrains WebStorm.
 * User: someoneelse
 * Date: 10/10/13
 * Time: 1:14 PM
 * To change this template use File | Settings | File Templates.
 */

(function (){

    var dom = document.getElementsByTagName("#p");
    console.log(dom);

    dom.innerHTML = "Damn dude, freaking let us out already for lunch, sheesh!!!!!!!!";






})();




var kid = {
    USF: [
        {
            id: 0,
            name: ""
        },
        {
            id: 0,
            name: "joe"
        },
        {
            id: 5,
            name: "Julian"
        }
    ],
    FullSail: [
        {
            id: 17,
            name: "lisa"
        },
        {
            id: 9,
            name: "child"
        }
    ]
}

kid.UF = [{id:0,
    name:""}
]

for (var i=0;i<kid.USF.length;i++){
    // console.log(kid.USF[i].name);
}

var person = {
    name: "scott",
    age: 37

};
person.gender = "m";
//console.log(person.gender);

var student1 = {name: "Bob",grades: [], average:0};
var student2 = {name: "john",grades: [], average:0};
//student.grades.push(90,80,70);

var students = [student1,student2];
function average(g){
    var total=0;
    g.forEach(function(e){
        total+=e;

    })
    return total/ g.length;
}
//student.average = average(student.grades);
var location = "f";
console.log(location);

showInfo(students);

//student1."name"

function showInfo(arr){
    arr.forEach(function(e){
        for (var key in e){
            console.log(key,e[key]);

        }
        console.log("------------------------------");
    })
}