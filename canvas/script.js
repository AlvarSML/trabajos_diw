window.onload = cnv;


function cnv() {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  // ej 1
  ctx.fillRect(0,0,20,50);

  // ej 2
  ctx.fillStyle = 'red';
  ctx.fillRect(30,0,20,50);

  ctx.fillStyle = 'green';
  ctx.fillRect(60,0,20,50);

  ctx.fillStyle = 'blue';
  ctx.fillRect(90,0,20,50);

  // ej 3
  ctx.fillStyle = 'rgba(255,0,0,1)'
  ctx.fillRect(120,0,50,50);

  ctx.fillStyle = 'rgba(0,0,255,.5)'
  ctx.fillRect(145,25,50,50); 

  // ej 4
  ctx.fillStyle = 'black';

  ctx.beginPath();
  ctx.moveTo(250,0);
  ctx.lineTo(350,150);
  ctx.moveTo(250,0);
  ctx.lineTo(150,150);
  ctx.moveTo(350,150);
  ctx.lineTo(150,150);
  ctx.stroke();

  // ej 5
  ctx.beginPath();
  ctx.moveTo(50,200);
  ctx.lineTo(100,250);
  ctx.lineTo(0,250);
  ctx.lineTo(50,200);
  ctx.fill();

  // ej 6
  ctx.fillStyle = 'gray';
  ctx.fillRect(110,200, 100,100);

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(160,250,40,0,Math.PI * 2,true);
  ctx.fill();

  // ej 7
  ctx.fillStyle = 'red';
  ctx.fillRect(230,200,100,100);

  ctx.fillStyle = 'white';
  ctx.fillRect(250,220,60,60);

  ctx.strokeStyle = 'blue';
  ctx.strokeRect(260,230,40,40);

  // ej 8 - 1
  ctx.strokeStyle = 'black';

  const SEPARACION = 9;
  for (let i = 0; i < 8; i++) {
  	ctx.lineWidth = i + 1;
  	ctx.beginPath();
  	ctx.moveTo(340 + i * SEPARACION, 200);
  	ctx.lineTo(340 + i * SEPARACION, 300);
  	ctx.stroke();
  }

  // ej 8 - 2

  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 1;

  ctx.beginPath();
  ctx.moveTo(420,200);
  ctx.lineTo(490,200);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(420,300);
  ctx.lineTo(490,300);
  ctx.stroke();

  ctx.strokeStyle = 'black';

  ctx.lineCap = 'butt';
  ctx.lineWidth = 9;
  ctx.beginPath();
  ctx.moveTo(430,200);
  ctx.lineTo(430,300);
  ctx.stroke();

  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(450,200);
  ctx.lineTo(450,300);
  ctx.stroke();

  ctx.lineCap = 'square';
  ctx.beginPath();
  ctx.moveTo(470,200);
  ctx.lineTo(470,300);
  ctx.stroke();

  // ej 8 - 3

  ctx.lineCap = 'butt';
  let lineJoin = ['round', 'bevel', 'miter'];
  const SEP = 40;

  
  for (let i = 0; i < lineJoin.length; i++) {
  	ctx.beginPath(); 
  	ctx.lineJoin = lineJoin[i];	
  	ctx.moveTo(500 + SEP,200 + i * SEP);
  	ctx.lineTo(520 + SEP,240 + i * SEP);
  	ctx.lineTo(540 + SEP,200 + i * SEP);
  	ctx.lineTo(560 + SEP,240 + i * SEP);
  	ctx.lineTo(580 + SEP,200 + i * SEP);
  	ctx.lineTo(600 + SEP,240 + i * SEP);
  	ctx.lineTo(620 + SEP,200 + i * SEP);

  	ctx.stroke(); 	
  }
  
  // ej 9

  ctx.lineJoin = 'round';
  ctx.lineWidth = 20;

  ctx.beginPath();
  ctx.moveTo(40,350);
  ctx.lineTo(95,450);
  ctx.lineTo(15,450);
  ctx.closePath();
  ctx.stroke();

  // ej 10
  ctx.lineWidth = 1;

  for (let x = 0; x < 11; x++) {
  	ctx.moveTo(120 + x * 10,350);
  	ctx.lineTo(120 + x * 10,450);
  	ctx.stroke();
  }

  for (let y = 0; y < 11; y++) {
  	ctx.moveTo(120,350 + y * 10);
  	ctx.lineTo(220,350 + y * 10);
  	ctx.stroke();
  }

  // ej 11

  ctx.beginPath();
  ctx.arc(250, 400, 20 ,0, Math.PI * 2, true);
  ctx.stroke();


  // ej 12

  ctx.fillStyle = 'green';
  ctx.beginPath();
  ctx.arc(300, 400, 20 ,0, Math.PI * 2, true);
  ctx.fill();

  // ej 13

  let gar = ctx.createLinearGradient(350,400,370,400);
  gar.addColorStop(0,'green');
  gar.addColorStop(0.5, 'red');
  gar.addColorStop(1,'blue');

  ctx.fillStyle = gar;
  ctx.beginPath();
  ctx.arc(350, 400, 20 ,0, Math.PI * 2, true);
  ctx.fill();

  canvas2();
}

function borrar(ctx,x,y,w,h){

  ctx.fillStyle = "white";

  ctx.fillRect(x,y,w,h);

}



const COLUMNAS = 6;

const FILAS = 20;



function canvas2() {

  // ej 14



  let canvas = document.getElementById('myCanvas');
  let ctx = canvas.getContext("2d");

  for (let y = 0; y < COLUMNAS; y++) {

    for (let x = 0; x < FILAS; x++) {

      ctx.fillStyle = "rgb(255,"+(150 - y*20)+","+(x*10)+")"

      ctx.fillRect(x*10,y*10,9,9);

    }

  }



  // ej 15



  ctx.beginPath();

  ctx.arc(250,50,50,0,2*Math.PI);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(230,35,5,0,2*Math.PI);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(270,35,5,0,2*Math.PI);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(250,50,35,0,Math.PI);

  ctx.stroke();



  //ej 16



  ctx.beginPath();

  ctx.arc(30,120,30,0,Math.PI);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(100,120,30,0,Math.PI * 1.5);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(170,120,30,0,Math.PI * 2);

  ctx.stroke();





  ctx.beginPath();

  ctx.arc(30,190,30,0,Math.PI,true);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(100,190,30,0,Math.PI * 1.5,true);

  ctx.stroke();



  ctx.beginPath();

  ctx.arc(170,190,30,0,Math.PI * 2,true);

  ctx.stroke();



  ctx.fillStyle = "black";



  ctx.beginPath();

  ctx.arc(30,260,30,0,Math.PI);

  ctx.fill();



  ctx.beginPath();

  ctx.arc(100,260,30,0,Math.PI * 1.5);

  ctx.fill();



  ctx.beginPath();

  ctx.arc(170,260,30,0,Math.PI * 2);

  ctx.fill();





  ctx.beginPath();

  ctx.arc(30,330,30,0,Math.PI,true);

  ctx.fill();



  ctx.beginPath();

  ctx.arc(100,330,30,0,Math.PI * 1.5,true);

  ctx.fill();



  ctx.beginPath();

  ctx.arc(170,330,30,0,Math.PI * 2,true);

  ctx.fill();



  // ej 17



  ctx.fillRect(320,0,50,50);

  setTimeout(borrar, 5000,ctx,320,0,50,50);



  // ej 180



  ctx.fillStyle = "black";

  ctx.font = "40px helvetica";

  let date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();


  ctx.textAlign = "center";
  ctx.fillText(dd+"/"+mm+"/"+yy,canvas.width / 2,150);



}




