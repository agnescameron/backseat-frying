function toggleLetter() {
	console.log('closing letter')
	$('.letterBox').toggle()
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
    ctx.fillText("fried", 330, 695);
    ctx.fillText("salad", 330, 15);

    //each grid cube is 35 by 35

    for(var i=0; i<recipes.length; i++){

      //don't do it w canvas because it makes interaction hard
      // console.log(recipes[i].name)
      // ctx.fillText(recipes[i].name.replace(/-/g, ' '), 35*(recipes[i].speed+10), (700-35*(recipes[i].salad+10)))

      $('<div />', {
        id: recipes[i].name,
        class: 'recipeName',
        click: function(){ console.log(this.id) }, 
      })
      .html(recipes[i].name.replace(/-/g, ' '))
      .css({left: 35*(recipes[i].speed+10), top: (690-35*(recipes[i].salad+10)) })
      .appendTo($('#canvasCover'))

     }
}


drawGrid();