/**
 * Created with JetBrains WebStorm.
 * User: diogocabral
 * Date: 10/24/13
 * Time: 6:46 PM
 * To change this template use File | Settings | File Templates.
 */

// DIOGO CABRAL, October, 23

var canvas = document.createElement("canvas");
document.body.appendChild(canvas);

canvas.width = 800;
canvas.height = 600;

var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "https://magicnails.com.br/adm/chart-bg.jpg";  //At this point the starts downloading the image but keep going
img.addEventListener("load",onLoad);

function onLoad(e){
    ctx.drawImage(img,0,0,800,600);
    drawChart();
}

var sales = [100,200,150];


function drawChart(){

    //grid
    ctx.beginPath();

    ctx.strokeStyle = "#a09d9f";
    ctx.lineWidth = 2;

    ctx.rect(1,1,798,598);

    //Horizontal lines
    ctx.moveTo(50,460);
    ctx.lineTo(750,460);

    ctx.moveTo(50,410);
    ctx.lineTo(750,410);

    ctx.moveTo(50,360);
    ctx.lineTo(750,360);

    ctx.moveTo(50,310);
    ctx.lineTo(750,310);

    ctx.moveTo(50,260);
    ctx.lineTo(750,260);

    //Vertical line
    ctx.moveTo(50,460);
    ctx.lineTo(50,230);


    ctx.stroke();
    //end of the grid




ctx.beginPath();
    ctx.rect(150,458,80,-(sales[0]));
    ctx.strokeStyle = "#0000ff";
    ctx.fillStyle = "0000ff";
    ctx.fill();
ctx.stroke();


ctx.beginPath();
    ctx.rect(350,458,80,-(sales[1]));
    ctx.strokeStyle = "#009000";
    ctx.fillStyle = "009000";
    ctx.fill();
ctx.stroke();

ctx.beginPath();
    ctx.rect(550,458,80,-(sales[2]));
    ctx.strokeStyle = "#ff0000";
    ctx.fillStyle = "ff0000";
    ctx.fill();
ctx.stroke();


    //Text

    ctx.beginPath();
    ctx.fillStyle = "000000";  // select color
    ctx.font = "14px Helvetica"; //choose font size and type
    ctx.fillText("2010",170,480); // string + x and y position

    ctx.fillText("2011",370,480);

    ctx.fillText("2012",570,480);

    ctx.fillText("50K",22,414);

    ctx.fillText("100K",14,365);

    ctx.fillText("150K",14,315);

    ctx.fillText("200K",14,265);

    ctx.stroke();

}
