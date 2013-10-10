/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/10/13
 * Time: 9:18 AM
 * To change this template use File | Settings | File Templates.
 */

console.log("Js running");
// document called Dog
var myDog = {breed: "Bulldog",
             name: "Jeff",
             age: "6" ,
             bark: function(){
                console.log("I am barking!");

             }
};


var myDogs = [];


// Create an Array with 2 objects

// first way

var dogs = [];
var dog1 = {breed: "Bulldog",
    name: "Jeff",
    age: "6" ,
    bark: function(){
        console.log("I am barking!");

    }
};

var dog2 = {breed: "Bulldog",
    name: "Jeff",
    age: "6" ,
    bark: function(){
        console.log("I am barking!");

    }
};

dogs.push(dog1, dog2);

console.log(dogs);

dogs = [dog1, dog2];

console.log(dogs);

// another way to do it

var dogs2 = [{breed: "Bulldog",
    name: "Jeff",
    age: "6" ,
    bark: function(){
        console.log("I am barking!");

    }
}];







(function(){






})();








