/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/23/13
 * Time: 7:25 PM
 * To change this template use File | Settings | File Templates.
 */






var canvas = document.createElement("canvas");

document.body.appendChild(canvas);

canvas.width = 400;
canvas.height = 400;

var ctx = canvas.getContext("2d");

ctx.beginPath();

ctx.strokeStyle = "#0000ff";
ctx.lineWidth = 2;
ctx.moveTo(20,20);
ctx.lineTo(180,400);
ctx.arc(60,60,50,0,Math.PI*2,true);


//ctx.rect(40,40,60,60);

ctx.stroke();





