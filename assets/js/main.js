function closeLetter() {
	$('.letterBox').hide()
}

function openLetter() {
  $('#letterContents').html(` Dear Adam, <br><br>
  Happy birthday! We've tried to collect some of the favourite Egg House recipes together, and put them in one place. The collection will expand over time -- for now, we've included a lot of fast ones to last you through thesis season.
  <br><br>
  Sending all of our love!
  <br><br>
  agnes + gary`)
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

    for(var i=0; i<recipes.length; i++){
      $('<div />', {
        id: recipes[i].name,
        class: 'recipeName',
        click: function(){ window.location.href = 'recipes/' + (this.id) + '.html' }, 
      })
      .html(recipes[i].name.replace(/-/g, ' '))
      .css({left: 35*(recipes[i].speed+10), top: (690-35*(recipes[i].salad+10)) })
      .appendTo($('#canvasCover'))
     }
}


drawGrid();