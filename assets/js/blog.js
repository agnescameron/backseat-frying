async function loadPosts() {
    for(var i=10; i>0; i--){
        try {
            await $.get(`post${i}.html`, function(post){
                $('#blog-container').append(post);
            });
        }
        
        catch (error) {
            console.log(error)
        }
    }
    $('#loading').remove();
}

loadPosts();