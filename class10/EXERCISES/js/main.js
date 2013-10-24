/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/22/13
 * Time: 11:22 AM
 * To change this template use File | Settings | File Templates.
 */


var name = "Full Sail";


//STRINGS
//console.log(name.length);
//console.log(name.charAt(0));
//console.log(name.substr(0,4));

//arrays

var grades = [30,40,"bob"];

console.log(grades.length);

//add elements
console.log(grades.push(70,80));
console.log(grades);
//remove any elements

//remove 40
//grades.splice(1,1);

//pop()
//indexOf

grades.splice(grades.indexOf("bob",1));  // remove element without know its position
console.log(grades);


//multidimensional array
var wow = [8,["bob","Dave","Joe"],25];
//how many elements has the array inside the array
console.log(wow[1].length);

//Objects Literals
//var person = {};  // could be code this way var person = new Object();

var person = {name: "Scott", age: 30, eat: function(){
    // function code goes here
}};

var people = {};
people.name = "Bob";
people.age = 75;
people.address = {street: "Orlando", city: "Winter Park", state: "FL"};
people.sleep = function(){
    //function code goes here

}

// calling a function inside an object

people.sleep();


//get city info
var city = people.address.city;

//Math Object
// random() floor()  round()

//generate random number between 2-5
var num = Math.floor(Math.random()*4+2);// 4 is how many numbers in the range, 2 is the lowest number in the range(start point)


// number between -2 to +6
var num = ~~(Math.random()*9-2);

//~~(Math.random()*3+2);
// returns random between 2,3,4

var someNum = 6.46678;
someNum.toFixed(2); //2 is the number of decimals
//return 6.46

//parseInt turns a string to a integer

// constructor Object

function Car (){
    this.model = "Toyota";
    this.x=0;
    this.y=0;
    this.speed=0;
    this.info = {tire: 0, tireName: ""};

    //this.position = {x:0,y:0};

};
 //instantiate the car





Car.prototype.move = function (){
   this.x+=this.speed;

}

var gabrielCar = new Car();
gabrielCar.model = "Ford";
gabrielCar.info.tire = 32;

gabrielCar.speed = 10;

var kareemCar = new Car();
console.log(kareemCar);
kareemCar.model = "Porsche";
console.log(kareemCar);

kareemCar.speed = 3;
console.log(kareemCar);

var cars = [gabrielCar,kareemCar];


(function (){

    var interval = setInterval(moveCars,1000/60);

    function moveCars(){
        cars.forEach(function(e){
            e.move();

        })

    }



})();



















