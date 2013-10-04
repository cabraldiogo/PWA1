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

var average = avgNumbers(numbers);
console.log(average);


