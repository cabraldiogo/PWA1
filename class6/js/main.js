/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/15/13
 * Time: 10:29 AM
 * To change this template use File | Settings | File Templates.
 */


(function (){





    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("#button")
    };
    var data = "";
    var name = "Diogo";

dom.button.addEventListener("click", onClick);

    function onClick(e){
        data = dom.input.value;
        if(data == name){
            dom.output.innerHTML  = "You're a genious";



        }else{
            dom.output.innerHTML = "You're a stupid";

        }

        dom.button.removeEventListener("click",onClick);
    }

    dom.button.addEventListener("click", onClick);

})();

















