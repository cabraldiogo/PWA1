/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/17/13
 * Time: 11:51 AM
 * To change this template use File | Settings | File Templates.
 */

window.utils={};

utils.getAverage = function (a){
    var total=0;
a.forEach(function(e){
     total+=e;

    });
    return total/ a.length;

};

utils.getArea = function (h,w){

    return h*w;

};

utils.getAreaCirc = function (r){


    return Math.PI * (r*r);

};

utils.getKmToMile = function (km){


    return km*0.621371;

};

utils.getAverage([9,8,9]);
//console.log(utils.getAverage([9,8,7]));

//console.log(utils.getArea(4,5));










