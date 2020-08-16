import { plants, patches } from './plants.js';

// constants
const numPlants = 100;

//evil global variable :o 
let bag = [];


//this function calculates the number
//of plants of a specified type in the bag

//assignment 3: replace this with
//a single-line arrow function
function countPlants(plantName) {
	let total = 0;

	for(let i=0; i<bag.length; i++){
		if(bag[i].name === plantName) total+=1
	}

	return total;
}

//this function 'picks' a plant from the 
//field and appends it to the bag
function pickPlant(plantDiv) {
	const plant = plantDiv.data('plant')
	bag.push(plant)

	//append the item to the bag div
	$('#bag-contents').append($('<div/>', {
			'class': 'bag-item'
		})
		.html(plant.name))

	const total = countPlants(plant.name)
	console.log(`there are now ${total} ${plant.name} in the bag`)
}

//this function randomly generates plants on the
//main 'field' at the start of the simulation
function growPlants() {
	patches.forEach( (patch) => {
		const plant = plants.filter((plant) => plant.name === patch.plant)[0]

		let plantDiv = $('<div/>', {
			'class': `plant ${plant.name}`
		})
		//this is the jquery .data() attribute
		.data('plant', plant)
		.html(plant.symbol)
		.css({'left': patch.locationX*100 + 'vw', 'top': patch.locationY*100 + 'vw', 'color': plant.color})
		.click(function() {
			pickPlant($(this));
		})
		.hover(function() {
			$(this).find('span').show();
		}, function() {
			$(this).find('span').hide();
		})
		$('#map').append(plantDiv)

		plantDiv.append(`<span class="plant-name">${plant.name}</span>`)
	})
}

//this code runs once the document has loaded
$(document).ready(function() {
	growPlants();
	$(window).click((event) => { console.log('locationX: '+ event.pageX/$(window).width() + ',\nlocationY: '+ event.pageY/$(window).width() ) })

	//event listeners
	$('#bag').click(() => $('#bag-contents').show())
	$('#bag-contents').click(() => $('#bag-contents').hide())
})
