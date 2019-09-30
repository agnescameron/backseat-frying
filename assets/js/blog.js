for(var i=0; i<3; i++){
	$.get(`post${i}.html`, function(data){
	    $('#textbox').append(data);
	    console.log(data);
	});
}