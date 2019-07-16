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

    ctx.moveTo(0, 350);
    ctx.lineTo(700, 350);
    ctx.stroke();

    ctx.moveTo(350, 0);
    ctx.lineTo(350, 700);
    ctx.stroke();

}


drawGrid();