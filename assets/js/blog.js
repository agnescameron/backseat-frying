for(var i=10; i>0; i--){
	await $.get(`post${i}.html`, function(data){
	    $('#blog-container').append(data);
	});
}