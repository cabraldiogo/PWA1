// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        var numTotal = 0;

        for(var i=0;i<arr.length;i++){

            numTotal += arr[i];

        }
        return numTotal / arr.length;

        //CODE GOES HERE
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

        //PUT FUNCTION HERE

    function fullName (first,last){


        return first +" "+ last
    }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

        //PUT FUNCTION HERE
    function wordCount(sentence){
        var counter = 0;
        for(var i= 0; i<= sentence.length; i++){
            if(sentence.charAt(i) == " "){
                counter ++;
            }
        }
        return counter + 1;
    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");


        //PUT FUNCTION HERE


    function charCount(ipsum){
        var spaces = ipsum.split(" ").length-1;
            return ipsum.split("").length - spaces;


    }


    console.log(charCount("this is test text that is being used as input to a function"));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

        //PUT FUNCTION HERE
    function vowelsInWord(word){
        var counter = 0;
        var lowerCase = word.toLowerCase();
        for(var i=0; i<lowerCase.length; i++){
            if(lowerCase.charAt(i) == "a" ||
                lowerCase.charAt(i) == "e" ||
                lowerCase.charAt(i) == "i" ||
                lowerCase.charAt(i) == "o" ||
                lowerCase.charAt(i)== "u"){
                counter++;
            }
        }
        return counter
    }
    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    function findNum(array,trueOrFalse){


        var foundNumbers = [];

        for(var i=0; i<array.length;i++){


            // find the evens
            if(trueOrFalse == true){
                if(array[i] % 2 == 0){
                    foundNumbers.push(array[i]);

                }
            }

            // find the odds
            else{
                if(array[i] % 2 == 1){
                    foundNumbers.push(array[i]);
                }
            }

        }

        return foundNumbers;

    }


    console.log(findNum([31,22,4,67,83,6,5,4], true));

})();