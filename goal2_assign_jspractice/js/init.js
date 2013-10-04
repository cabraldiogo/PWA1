/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/3/13
 * Time: 4:00 PM
 * To change this template use File | Settings | File Templates.
 */

//create a function named 'avgNumbers'
//accept 1 parameter into the function that will be an array of unlimited numbers
//find the average of all the numbers
//return the average from the function
//console.log the answer outside of the function

var numbers = [50,60,90,80,60,30];

function avgNumbers(numArray){
    var numTotal = 0;

    for(var i=0;i<numArray.length;i++){

        numTotal += numArray[i];

    }
    var calcAverage = numTotal / numArray.length;
    return calcAverage;


};

var average = "The average of my array is " + (avgNumbers(numbers)).toFixed(2);
console.log(average);

//==================================//

// create a function named 'fullName'
// accept 2 parameters into the function that are strings (firstname and lastname)
// return the name after it has been concatenated
// console.log the answer outside of the function

var fName = "Diogo";
var lName = "Cabral";

function fullName (first,last){

    var concName = fName +" "+ lName;
    return concName

}

console.log(fullName(fName,lName));


















//==================================//

//create a function named 'wordCount'
//accept 1 parameter into the function that is a long string of text words
//create a function that counts all the words and return the answer
//console.log the answer outside of the function


var string = "I still have questions about functions and loops!";

function wordCount(sentence){
    var counter = 0;
    for(var i= 0; i<= sentence.length; i++){
        if(sentence.charAt(i) == " "){
            counter ++;
        }
    }
    return counter + 1;
 }
console.log("My sentence has " + wordCount(string)+ " words");

//==================================//







