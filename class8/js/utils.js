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

    })
    return total/ a.length;

};
