async function loadPosts() {
	for(var i=10; i>0; i--){
	try{
		await $.get(`post${i}.html`, function(data){
	    	$('#blog-container').append(data);
		});
	}

	catch (error) {
		console.log(error)
	}
}
}


loadPosts();