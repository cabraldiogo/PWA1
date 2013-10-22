/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

// Diogo Cabral | October, 21st



(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        //console.log("clicking");
        e.name = document.querySelector("#f_username");


        validateField("#f_username");  //id = is the form input field ID
        console.log("f_username");

        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        console.log("clicking");

        if (inputName.name === "#f_username"){
            console.log("If is true");
            var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



