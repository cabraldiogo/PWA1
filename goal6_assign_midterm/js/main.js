/*
	* Mid Terms for PWA-1
*/

// DIOGO CABRAL - October, 12

//console.log("JS Started");



(function(){

// Array with objects that contains the student info
var students = [{name:"Diogo Cabral", Address: {street:"University Blvd", city:"Winter Park", state:"FL"}, GPA:[5.0,3.0,1.0]},
                {name:"Gabriel Ferraz", Address: {street:"Mills Ave", city:"San Francisco", state:"CA"}, GPA:[2.0,3.0,3.5]}
                ];

//Creating an event to the "Next" button that needs to show each student info at the output div



//Trying to get average.
    function average(g){
        var total=0;
        g.forEach(function(e){
            total+=e;

        });

        return total/ g.length;
    }

    var i = 0;

    document.querySelector("#name").innerHTML = "Name: " + students[i].name;
    document.querySelector("#address").innerHTML = "Address: " + students[i].Address.street;
    document.querySelector("#gpa").innerHTML = "GPA: " + students[i].GPA;
    document.querySelector("#gpaavg").innerHTML = "Average GPA: " + average(students[i].GPA);



//Function that display the students info
    function displayData(){

                document.querySelector("#name").innerHTML = "Name: " + students[i+1].name;
                document.querySelector("#address").innerHTML = "Address: " + students[i+1].Address.street;
                document.querySelector("#gpa").innerHTML = "GPA: " + students[i+1].GPA;
                document.querySelector("#gpaavg").innerHTML = "Average GPA: " + average(students[i+1].GPA);
                 i++

            if(i==students.length-1){

                document.querySelector("#round").innerHTML = "No more students to show";
                document.querySelector(".buttonred").innerHTML = "DONE!!!";
                document.removeEventListener("click",displayData);
            }

    }

//Function to add a new student
    function addData(name,obj,g){
        var newStudent = {};
        newStudent.name = name;
        newStudent.Address = obj;
        newStudent.GPA = g;
        students.push(newStudent);

    }

//Console.log the first two students info
    console.log("*** Below is the original 2 students ***" + "\n");
    for(var key in students){

        console.log("Name: " + students[key].name);
        console.log("Address: "+
            students[key].Address.street +", "+
            students[key].Address.city +" - "+
            students[key].Address.state);
        console.log("GPA: " + "["+ students[key].GPA+ "]" + "\n" );

        //console.log(key,students[key]);

    }

//Calling the function that add a new student
    addData("Kareem Beazer",{street:"University Blvd", city:"Winter Park", state:"FL"},[2.0,3.5,4.5]);

//Console.log the new student Array that contains the new student
    console.log("*** Below is the new object with a new student on the object ***" + "\n");


    for(var key in students){

        console.log("Name: " + students[key].name);
        console.log("Address: "+ students[key].Address.street +", "+
            students[key].Address.city +" - "+
            students[key].Address.state );
        console.log("GPA: " + "["+ students[key].GPA+ "]");

    }



        document.addEventListener("click",displayData);




})();