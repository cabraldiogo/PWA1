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
        e.email = document.querySelector("#f_email");
        e.phone = document.querySelector("#f_phone");
        e.password = document.querySelector("#f_password");
        e.ssn = document.querySelector("#f_ssn");

        console.log("Onsubmit function middle");

        validateField(e.name);  //id = is the form input field ID
        validateField(e.email);
        validateField(e.phone);
        validateField(e.password);
        validateField(e.ssn);

        console.log("Onsubmit function final");


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        console.log("clicking");

        if (inputName.name === "#f_username") {
            console.log("If is true");
            var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        }



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



