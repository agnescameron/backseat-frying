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
  var xAxes = ['fast slow', 'catholic protestant'];
  var yAxes = ['salad fried', 'church state'];
  var xAxis = xAxes[Math.floor(Math.random()*xAxes.length)].split(/\s+/g);
  var yAxis = yAxes[Math.floor(Math.random()*yAxes.length)].split(/\s+/g);

  //draw the canvas
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

  //draw the axes
  ctx.font = "15px Helvetica";
  ctx.fillText(xAxis[0], xAxis[0] === 'fast' ? 675 : 645, 340);
  ctx.fillText(xAxis[1], 20, 340);
  ctx.fillText(yAxis[1], 330, 695);
  ctx.fillText(yAxis[0], 330, 15);

  for(var i=0; i<recipes.length; i++){
    $('<div />', {
      id: recipes[i].name,
      class: 'recipeName',
      click: function(){ window.location.href = 'recipes/' + (this.id) + '.html' }, 
    })
    .html(recipes[i].name.replace(/-/g, ' '))
    .css({left: 35*(recipes[i][xAxis[0]]+10), top: (690-35*(recipes[i][yAxis[0]]+10)) })
    .appendTo($('#canvasCover'))
   }
}


drawGrid();