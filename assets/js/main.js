function closeLetter() {
	console.log('closing letter')
	$('.letterBox').hide()
}

function openLetter() {
  console.log('opening letter')
  $('.letterBox').show()
}


function getEntries(array, type, val) {
  return array.filter(function (el) {
    return el[type] === val;
  });
}

//scrubs entry from array
function remove(array, entry) {
  var index = array.indexOf(entry);
    if (index > -1) {
      array.splice(index, 1);
    }
}

//the AI
function generateMeal () {
  var people = Math.floor(Math.random()*5)+1;
  var points = [];
  var option;
  var mains = getEntries(recipes, "classification", "main");
  var veg = getEntries(recipes, "classification", `veg`);
  var sides = getEntries(recipes, "classification", `side`);
  var soups = getEntries(recipes, "classification", `soup`);  
  var breakfastcarbs = getEntries(recipes, "classification", `breakfast-carb`);
  var smallsoups = getEntries(recipes, "classification", `small-soup`);

  if(people === 1){
    var choices = sides.concat(soups);
    var choice = choices[Math.floor(Math.random()*choices.length)];
    points.push(choice);
  }

  if(people === 2){
    //line between dishes
    //2 sides, soup+veg, soup+side, side+veg, main+veg
    var choices = sides.concat(soups, veg);
    var length = choices.length;
    var choice1 = choices[Math.floor(Math.random()*length)];
    points.push(choice1); 
    remove(choices, choice1)   
    var choice2 = choices[Math.floor(Math.random()*length-1)];
    points.push(choice2); 
  }

  if(people === 3){
    //line between dishes
    //main and 2 of veg and side, or soup and 2 of veg and side
    option = Math.floor(Math.random()*2);
    console.log('option is', option)

    if(option === 0){
      //pick a main, then randomly 2 sides or veg
      var main = mains[Math.floor(Math.random()*mains.length)];
      points.push(main)      
    }

    else{
      //pick a soup, then randomly 2 sides or veg
      var soup = soups[Math.floor(Math.random()*soups.length)];
      points.push(soup)         
    }

    var extras = veg.concat(sides)
    var length = extras.length;
    var extra1 = extras[Math.floor(Math.random()*length)];
    points.push(extra1)
    remove(extras, extra1);
    var extra2 = extras[Math.floor(Math.random()*length-1)];
    points.push(extra2)

  }

  if(people === 4){
    //line between dishes
    //any 4 dishes excluding breakfast and containing main
    //or breakfast, with 3 veg
    var main = mains[Math.floor(Math.random()*mains.length)];
    points.push(main)

    var extras = veg.concat(sides, soups)
    console.log('extras', extras, extras.length)
    var length = extras.length;
    var extra1 = extras[Math.floor(Math.random()*length)];
    points.push(extra1)
    remove(extras, extra1);
    var extra2 = extras[Math.floor(Math.random()*length-1)];
    points.push(extra2)
    remove(extras, extra2);
    var extra3 = extras[Math.floor(Math.random()*length-2)];
    points.push(extra3)

  }

  if(people === 5){
    //line between dishes
    //any 4 dishes excluding breakfast and containing main
    //or breakfast, with 3 veg
    var length = mains.length;
    var main1 = mains[Math.floor(Math.random()*length)];
    points.push(main1)
    remove(mains, main1);
    var main2 = mains[Math.floor(Math.random()*length-1)];
    points.push(main2)

    var extras = veg.concat(sides, soups)
    var length = extras.length;
    var extra1 = extras[Math.floor(Math.random()*length)];
    points.push(extra1)
    remove(extras, extra1);
    var extra2 = extras[Math.floor(Math.random()*(length-1))];
    points.push(extra2)
    remove(extras, extra2);
    var extra3 = extras[Math.floor(Math.random()*(length-2))];
    points.push(extra3)

  }


  descriptors = ["stunning", "delicious", "charming", "delightful", "romantic", "filling", "nutritious", "generous", "luxuriant", "healthy", "simple"];
  descriptor = descriptors[Math.floor(Math.random()*descriptors.length)];

  var recipeList = '';
  console.log(points)

  for(var i=(points.length-1); i>=0; i--){
    console.log(recipeList, i)
    if (i===0) recipeList = recipeList + points[i].name.replace(/-/g, ' ');
    else if (i===1) recipeList = recipeList + points[i].name.replace(/-/g, ' ') + ' and ';
    else recipeList = recipeList + `${points[i].name.replace(/-/g, ' ')}, `
  }

  var oracleText = `The oracle recommends a ${descriptor} meal for ${people} of ${recipeList}` 
  $('#letterContents').html(oracleText)
  $('.letterBox').show()
}

function drawLine(start, finish){}

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
        click: function(){ window.location.href = 'recipes/' + (this.id)+'.html' }, 
      })
      .html(recipes[i].name.replace(/-/g, ' '))
      .css({left: 35*(recipes[i].speed+10), top: (690-35*(recipes[i].salad+10)) })
      .appendTo($('#canvasCover'))

     }
}


drawGrid();