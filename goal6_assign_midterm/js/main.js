/*
	* Mid Terms for PWA-1
*/

// DIOGO CABRAL - October, 12

//console.log("JS Started");

// SORRY, SCOTT I COULD NOT DO IT. I AM FEELING SO BAD. I THINK I REALLY DIDN'T LEARN.




(function(){

// Array with objects that contains the student info
var students = [{name:"Diogo Cabral", Address: {street:"University Blvd", city:"Winter Park", state:"FL"}, GPA:[5.0,3.0,1.0]},
                {name:"Gabriel Ferraz", Address: {street:"Mills Ave", city:"San Francisco", state:"CA"}, GPA:[2.0,3.0,3.5]}
                ];




// Trying to get average.
//    function average(g){
//        var total=0;
//        g.forEach(function(e){
//            total+=e;
//
//        })
//
//        return total/ g.length;
//    }
//console.log(average(students[0].GPA));




//Function that display the students info
    function displayData(){
        document.querySelector("#name").innerHTML = students[0];

    }

//Function to add a new student
    function addData(name,str,cit,stt,g){
        var newStudent = {};
        newStudent.name = name;
        newStudent.Address = {};
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
    addData("Kareem Beazer","Semoran Blvd","Orlando","FL",[2.0,3.5,4.5]);

//Console.log the new student Array that contains the new student
    console.log("*** Below is the new object with a new student on the object ***" + "\n");

    for(var key in students){

        console.log("Name: " + students[key].name);
        console.log("Address: "+ students[key].Address.street +", "+
            students[key].Address.city +" - "+
            students[key].Address.state );
        console.log("GPA: " + "["+ students[key].GPA+ "]" + "\n" );

    }

//Creating an event to the "Next" button that needs to show each student info at the output div
    document.addEventListener("click",displayData);

































































})();