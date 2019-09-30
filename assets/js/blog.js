for(var i=0; i<3; i++){
	$.get(`post${i}.html`, function(data){
	    $('#blog-container').append(data);
	    console.log(data);
	});
}