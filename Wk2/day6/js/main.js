/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/12/13
 * Time: 2:56 PM
 * To change this template use File | Settings | File Templates.
 */



var date = new Date();


var month = date.getMonth();  // zero index based

var nDate = date.getDate(); // day of the month

var day = date.getDay(); // day of the week. zero based, Sunday is zero

var year = date.getFullYear(); // year



var days = ["Sun","Mon","Tue", "Wed", "Thu","Fri","Sat"];
var months = ["Jan","Fev", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

console.log(date);

var coolDate = days[day]+", "+months[month]+" "+ nDate+ ", "+ year;


var student = {name:"Bob", grade:[], address: {street: "University Blvd", zipcode: 32792}, date: coolDate};

console.log(student);