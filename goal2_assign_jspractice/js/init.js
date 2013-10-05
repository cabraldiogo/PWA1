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


//create a function named 'charCount'
//accept 1 parameter into the function that is a long string of text
//return length of the array of string characters
//console.log the answer outside of the function

var string2 = ["Diogo Cabral","Gabriel Ferraz","Kareem Beazer"];

function charCount(charQty){

    var counter = 0;
        for(var i= 0; i< charQty.length; i++){
           counter = i;

        }
    return counter + 1;

}


  console.log("The Array string2 has "+charCount(string2)+ " elements");
//==================================//

//create a function named 'vowelsInWord'
//accept 1 parameter into the function that is a a one word string
//return the number of vowels in the word
//console.log the answer outside of the function

var wordVariable = "University";

function vowelsInWord(word){
    var counter = 0;

    for(var i=0; i<word.length; i++){
          if(word.charAt(i)== "a" || word.charAt(i)=="A"){
              counter++;
          }else if(word.charAt(i)== "e" || word.charAt(i)=="E"){
             counter++;
          }else if(word.charAt(i)== "i" || word.charAt(i)=="I"){
             counter++;
          }else if(word.charAt(i)== "o" || word.charAt(i)=="O"){
             counter++;
          }else if(word.charAt(i)== "u" || word.charAt(i)=="U"){
              counter ++;
          }

    }
return counter;

}

console.log( "The word on wordVariable has "+vowelsInWord(wordVariable) + " vowels");




//==================================//


//create a function named 'findNum'
//    - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
//- if the second parameter being passed is "false" or null then
// - create an array with all of the odd numbers from the array
//- else
// - create an array with all of the even numbers from the array
//- return the array
//- console.log the answer outside of the function








