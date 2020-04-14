function closeLetter() {
	$('.letterBox').hide()
}

function openLetter() {
  $('#letterContents').html(` <p id = "letterContents">
  this is a website we made for adam's birthday, but since it has expanded! we even have a <a href="https://tinyletter.com/backseatfrying">mailing list</a> now! (and a <a href="https://backseatfrying.net/blog/blog.html">secret blog</a>). 
  <br><br>
  try consulting the oracle, and know that all ingredients are positioned relative to egg house, e.g. <i>next to <a href="https://www.google.com/maps/place/Market+Basket/@42.3730471,-71.1062517,15.45z/data=!4m5!3m4!1s0x89e37735b497dedb:0x58d9277e3873315d!8m2!3d42.380782!4d-71.1016327">market basket</a></i> (best supermarket, for which there is no substitute). 
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

const date = new Date();
const day = date.getDay();

if(day<2){
  $('#paste').show()
  $('#pasteText').show()
  const circleType = new CircleType(document.getElementById('pasteText'));
}
