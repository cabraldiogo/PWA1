/*
	* Mid Terms for PWA-1
*/

// DIOGO CABRAL - October, 24

//console.log("JS Started");



(function(){

// Array with objects that contains the student info
    var students = [];
    var i = 0;

    var newStudent = new Student("Diogo Cabral", {street:"University Blvd", city:"Winter Park", state:"FL"},[2.0,3.0,2.0],new Date());
    students.push(newStudent);
    var newStudent = new Student("Gabriel Ferraz", {street:"Semoran Blvd", city:"Orlando", state:"FL"},[4.0,2.0,3.0],new Date());
    students.push(newStudent);


    var months = ["January","February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear();





//get GPA average.
    function average(g){
        var total=0;
        g.forEach(function(e){
            total+=e;

        });

        return total/ g.length;
    }



    document.querySelector("#name").innerHTML = students[i].name;
    document.querySelector("#address").innerHTML = "Address: " +
                                                    students[i].address.street + ", "+
                                                    students[i].address.city+  " - "+
                                                    students[i].address.state;
    document.querySelector("#gpa").innerHTML = "GPA: " + students[i].GPA;
    document.querySelector("#gpaavg").innerHTML = "Average GPA: " + average(students[i].GPA);
    document.querySelector("#date").innerHTML =  "Date: " + months[mm] + ", " + dd+ " " + yyyy;



//Function that display the students info
    function displayData(){

                document.querySelector("#name").innerHTML = "Name: " + students[i+1].name;
                document.querySelector("#address").innerHTML = "Address: " +
                    students[i+1].address.street + ", "+
                    students[i+1].address.city +  " - "+
                    students[i+1].address.state;
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
        newStudent.address = obj;
        newStudent.GPA = g;
        students.push(newStudent);

    }

//Console.log the first two students info
    console.log("*** Below is the original 2 students ***" + "\n");
    for(var key in students){



        console.log("Name: " + students[key].name);
        console.log("Address: "+
            students[key].address.street +", "+
            students[key].address.city +" - "+
            students[key].address.state);
        console.log("GPA: " + "["+ students[key].GPA+ "]" );
        console.log("Date: " + months[mm]+","+dd+" "+yyyy + "\n" );

        //console.log(key,students[key]);

    }

//Calling the function that add a new student
    addData("Kareem Beazer",{street:"University Blvd", city:"Winter Park", state:"FL"},[2.0,3.5,4.5]);

//Console.log the new student Array that contains the new student
    console.log("*** Below is the new object with a new student on the object ***" + "\n");


    for(var key in students){

        console.log("Name: " + students[key].name);
        console.log("Address: "+ students[key].address.street+", "+
            students[key].address.city +" - "+
            students[key].address.state );
        console.log("GPA: " + "["+ students[key].GPA+ "]");
        console.log("Date: " + months[mm]+","+dd+" "+yyyy + "\n" );

    }



        document.addEventListener("click",displayData);














})();