function closeLetter() {
	console.log('closing letter')
	$('.letterBox').remove()
}

//draw grid
function drawGrid(){

	var canvas = document.getElementById("canvas");
  	var ctx = document.getElementById('canvas').getContext('2d');

  	ctx.lineWidth = 3;

	ctx.beginPath();

    ctx.moveTo(20, 350);
    ctx.lineTo(700, 350);
    ctx.stroke();

    ctx.moveTo(350, 20);
    ctx.lineTo(350, 680);
    ctx.stroke();

    ctx.font = "15px Helvetica";
    ctx.fillText("fast", 675, 340);
    ctx.fillText("slow", 20, 340);
    ctx.fillText("salad", 330, 695);
    ctx.fillText("fried", 330, 15);
}


drawGrid();