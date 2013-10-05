/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/5/13
 * Time: 9:22 AM
 * To change this template use File | Settings | File Templates.
 */

//CLASS 3 ACTIVITY

// Returns 6 numbers between 1 and 6
var dice = Math.floor(Math.random()*6+1);

// Return 4 possible numbers between 4 and 9. The 6 is how many possibles of number in the range. The +4 is the lowest number of the range.
// If it the lowest is a negative use - and the number.
var dice = Math.floor(Math.random()*6+4);


// ~~ is the same as Math.floor



// must put the break. default is similar to else

switch (dice){
    case 2:
        console.log("You rolled a two");
        break;
    case 3:
        console.log("You rolled a three");
        break;
    default:
        console.log("You rolled something else");



}



function sayHello(){

};

// Self executing function. Put the whole function inside () and put empty () at the end.

(function(){


})();










