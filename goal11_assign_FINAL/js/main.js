/*
	* Mid Terms for PWA-1
*/

// DIOGO CABRAL - October, 24

//console.log("JS Started");



(function(){

// Array with objects that contains the student info
    var students = [];
    var i = 0;
    var d = new Date();
    var dd = d.getDate();
    var mm = d.getMonth();
    var yyyy = d.getFullYear().toString().substr(2,2);

    document.addEventListener("click",displayData);


    var newStudent = new Student("Diogo Cabral", {street:"University Blvd", city:"Winter Park", state:"FL"},[2.0,3.0,2.0],new Date());
    students.push(newStudent);

    var newStudent = new Student("Gabriel Ferraz", {street:"Semoran Blvd", city:"Orlando", state:"FL"},[4.0,2.0,3.0],new Date());
    students.push(newStudent);

//get GPA average.
//    function average(g){
//        var total=0;
//        g.forEach(function(e){
//            total+=e;
//
//        });
//
//        return total/ g.length;
//    }

    Student.prototype.gpaAverage = function(){

       this.average = 2;

    };



     console.log(students[1].average);

    function studentsInfo(){
        for(var key in students){

            console.log("Name: " + students[key].name);
            console.log("Address: "+ students[key].address.street+", "+
                students[key].address.city +" - "+
                students[key].address.state );
            console.log("GPA: " + students[key].GPA);
            console.log("Date: " + (mm+1) +"/"+dd+"/"+yyyy + "\n" );

        }

    }


//Function that display the students info
    function displayData(){

                document.querySelector("#name").innerHTML = "Name: " + students[i].name;
                document.querySelector("#address").innerHTML = "Address: " +
                    students[i].address.street + ", "+
                    students[i].address.city +  " - "+
                    students[i].address.state;
                document.querySelector("#gpa").innerHTML = "GPA: " + students[i].GPA;
                document.querySelector("#date").innerHTML =  "Date: " + (mm+1) +"/"+dd+"/"+yyyy;
        //document.querySelector("#gpaavg").innerHTML = "Average GPA: " + average(students[i].GPA);
                 i++

            if(i==students.length){

                document.querySelector("#round").innerHTML = "No more students to show";
                document.querySelector(".buttonred").innerHTML = "DONE!!!";
                document.removeEventListener("click",displayData);
            }

    }



//Console.log the first two students info
    console.log("*** Below is the original 2 students ***" + "\n");
    studentsInfo();


    var newStudent = new Student("Kareem Beazer",{street:"University Blvd", city:"Winter Park", state:"FL"},[2.0,3.5,4.5],new Date());
    students.push(newStudent);

//Console.log the new student Array that contains the new student
    console.log("*** Below is the new object with a new student on the object ***" + "\n");
    studentsInfo();


    displayData();


})();