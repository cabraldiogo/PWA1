/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/22/13
 * Time: 9:32 AM
 * To change this template use File | Settings | File Templates.
 */


(function(){

    var dom = {
        input1: document.querySelector("#input1"),
        btn1: document.querySelector("#btn1"),
        output1: document.querySelector("#output1"),
        input2: document.querySelector("#input2"),
        output2: document.querySelector("#output2"),
        input3: document.querySelector("#input3"),
        output3: document.querySelector("#output3")

    };

    var pattern1 = /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/;
    var pattern2 = /^(?!0{5})(\d{5})(?!-?0{4})(-?\d{4})?$/;
    var pattern3 =  /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    dom.btn1.addEventListener("click", onClick);


    function onClick(e){

        var pass = pattern1.test(dom.input1.value);
        var pass2 = pattern2.test(dom.input2.value);
        var pass3 = pattern3.test(dom.input3.value);

        if(pass){
            dom.output1.innerHTML = "name passed";
        }else{
            dom.output1.innerHTML = "name failed";
        }

        if(pass2){
            dom.output2.innerHTML = "zipcode passed";

        }else{
            dom.output2.innerHTML = "zipcode failed";
        }

        if(pass3){
            dom.output3.innerHTML = "email passed";
        }else{

            dom.output3.innerHTML = "email failed";
        }
    }














})();
