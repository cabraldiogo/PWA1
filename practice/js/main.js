/*
	* Mid Terms for PWA-1
*/

// DIOGO CABRAL - October, 12

//console.log("JS Started");



(function(){


    function Student(){
        this.name = "";
        this.address = {};
        this.GPA = [];
    }

    var newStudents = [];
     var dom = {

         name: document.querySelector("#name"),
         address: document.querySelector("#address"),
         GPA: document.querySelector("#gpa")
     };


        var gabriel = new Student();
            gabriel.name = "Gabriel";
            gabriel.address = {street: "Goldenrod", state: "FL"};
            gabriel.GPA = [2,4,6];
            console.log(gabriel.name + "\n" + gabriel.address.street + "," + gabriel.address.state+"\n"+gabriel.GPA);
            newStudents.push(gabriel);



        var kareem = new Student();
            kareem.name = "Kareem";
            kareem.address = {street: "Orange Av", state:"FL"};
            kareem.GPA = [2,6,4];
            newStudents.push(kareem);

    console.log(kareem);
    console.log(newStudents[0].GPA);























})();