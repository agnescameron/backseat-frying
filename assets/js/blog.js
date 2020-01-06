for(var i=10; i>0; i--){
	$.get(`post${i}.html`, function(data){
	    $('#blog-container').append(data);
	});
}