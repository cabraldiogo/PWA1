/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/15/13
 * Time: 11:00 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var interval = setInterval(update,1000);





    //Using capital letter at the begining of a function name means it is a constructer function
    function Car (n,m,c){
        this.name = n;
        this.model = m;
        this.color = c;


    }

    Car.prototype.move = function(){
      console.log(this.name + "car is moving");
    }

    Car.prototype.update = function(){
        console.log(this.name + "car is moving");
    }



    function update(){
        console.log("Running");
    }


    var myCar = new Car ("Scott", "Toyota", "Silver");
    myCar.move();

    var jCar = new Car ("Jay", "Toyota", "Silver");
    jCar.move();







//    var cars = [];
//
//    var myCar = new Car("Scott","Toyota","silver");
//    var yourCar = new Car("Kareem","VW","black");
//    var jCar = new Car("J","Ford","green");
//
//    cars.push(myCar,yourCar,jCar);

    //console.log(cars);


//    cars.forEach(function(e)){
//        console.log(e.model);
//
//
//    }
































})();
