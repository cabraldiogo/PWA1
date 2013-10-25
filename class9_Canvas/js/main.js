/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/19/13
 * Time: 10:17 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){


var canvas = document.createElement("canvas"); //create a tag on the HTML

    document.body.appendChild(canvas); // this line specifies where the tag will be located on the HTML(document)

    // is possible to combine these two lines. Try it!

    canvas.width=400;
    canvas.height=400;

    var ctx = canvas.getContext("2d");// ctx stands for context

    //inserting an image on the canvas
    var img = new Image();
    img.src = "http://datamatrix.kaywa.com/img.php?s=8&d=http%3A%2F%2Fwww.magicnails.com.br";  //At this point the starts downloading the image but keep going
    img.addEventListener("load",onLoad);

    function onLoad(e){
         ctx.drawImage(img,220,220,300,300);
        drawChart();

    }




     function drawChart(){



         ctx.beginPath();

         ctx.strokeStyle = "#000000";
         ctx.lineWidth = 2;
         ctx.moveTo(0,200);
         ctx.lineTo(400,200);
         //ctx.stroke();

         ctx.beginPath();
         ctx.moveTo(200,0);
         ctx.lineTo(200,400);
         //ctx.stroke();

         ctx.beginPath();
         ctx.rect(180,180,40,40);
         ctx.strokeStyle = "#0000ff";  // blue       // another way to choose color "rgb(0,20,80)"

         //ctx.stroke();

         //creating random colors

         var red = ~~(Math.random()*255);
         var green = ~~(Math.random()*255);
         var blue = ~~(Math.random()*255);
         var randomPosition =  ~~(Math.random()*400);

     }





    //color, position, length


//    for(var i=0; i<500;i++){
//
//        ctx.beginPath();
//
//
//        var red = ~~(Math.random()*255);
//        var green = ~~(Math.random()*255);
//        var blue = ~~(Math.random()*255);
//
//
//        //var randomX =  ~~(Math.random()*400);
//        //var randomY =  ~~(Math.random()*400);
//        ctx.strokeStyle = "rgb("+red+","+green+","+blue+")";
//        ctx.moveTo(~~(Math.random()*400),~~(Math.random()*400));
//        ctx.lineTo(~~(Math.random()*400),~~(Math.random()*400));
//        ctx.stroke();
//
//    }

    // drawing a circle. The method is ".arc"
    //ctx.beginPath();
    //ctx.arc(200,200,20,0,Math.PI*2,true); // the angle parameter is in radiant. 6.28 radiant complete a circle. Or 2 PI(3.14)
    //ctx.stroke();
//
//
//
//    //
    //ctx.beginPath();
    //ctx.fillStyle = "#00ff00";  // If you want to fill a circle, declare its style first. Then call the .fill();

    ctx.arc(200,200,40,0,Math.PI*2,true);
    ctx.fill(); // Call the fill
    ctx.stroke();
//
//    //Text
//
    ctx.beginPath();
    ctx.fillStyle = "000000";  // select color
    ctx.font = "14px Helvetica"; //choose font size and type
    ctx.fillText("Hello World!",5,180); // string + x and y position


















































})();
