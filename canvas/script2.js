window.onload = start;

function start() {
	let cnv = document.getElementById('canvas');
	let ctx = cnv.getContext('2d');

	// ej 1

	let color = "rgb(20,255,20)";
	degradado(ctx,color,0,0,100,40);

	color = "rgb(255,255,0)";
	degradado(ctx,color,0,40,100,40);

	color = "rgb(20,20,255)";
	degradado(ctx,color,0,80,100,40);

	color = "rgb(255,20,20)";
	degradado(ctx,color,0,120,100,40);

	// ej 2
	ctx.translate(110,10);
	ctx.fillStyle = "blue";
	ctx.globalAlpha = .5;

	for (let i = 0; i < 3; i ++) {
		ctx.save();
		for (let j = 0; j < 3; j++){
			
			ctx.fillRect(0,0,10,10);
			ctx.translate(20,0);

		}
		ctx.restore();
		ctx.translate(0,20);
		ctx.globalAlpha += .2;
	}

	// ej 3
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(200,0);

	ctx.fillStyle = "yellow";
	ctx.fillRect(0,0,50,50);
	ctx.fillStyle = "green";
	ctx.fillRect(50,0,50,50);
	ctx.fillStyle = "blue";
	ctx.fillRect(0,50,50,50);
	ctx.fillStyle = "red";
	ctx.fillRect(50,50,50,50);

	ctx.fillStyle = "white";
	ctx.globalAlpha = .2;
	for (let i = 0; i < 7; i ++) {
		ctx.arc(50,50,i*7,0,Math.PI *2);
		ctx.fill();
	}	
}

function degradado(ctx,color,x,y,w,h) {
	ctx.fillStyle = color;
	ctx.fillRect(x,y,w,h);
	ctx.fillStyle = "white";
	ctx.fillRect(x+5,y+5,w-10,h-10);

	ctx.fillStyle = color;
	for(let i = 0; i < w/10-1; i++) {
		ctx.globalAlpha -= 0.1;
		ctx.fillRect(x+i*10,y+5,10,h-10);
	}
	ctx.globalAlpha = 1;
}