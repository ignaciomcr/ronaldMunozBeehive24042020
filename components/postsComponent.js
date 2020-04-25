function PostsComponent(callback) {
    //Se llama a toda la estructura.
    
    //ESTO LO DESHABILITÉ PORQUE BLOQUEBA LOR PRIMEROS BOTONES 
    AppComponent.call(this);

}

PostsComponent.prototype = Object.create(AppComponent.prototype);
PostsComponent.prototype.constructor = PostsComponent;


PostsComponent.prototype.showBeeDetailsPOST = function (user) {
         
        document.getElementById('divPosts').innerHTML='';
        var divPosts = document.getElementById('divPosts'); 
        
        var h1Posts = document.createElement('h1');
        h1Posts.innerHTML = "Bee´s Posts";
        h1Posts.classList.add('h1Posts');
       
        divPosts.appendChild(h1Posts); 


        this.posts = [];

        var url = 'https://beehive-270a2.firebaseio.com/data/posts.json';
        
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.send();
        request.onreadystatechange = processRequest; 

        function processRequest(e) {
            var request = e.target;

            if (request.readyState === 4) {
                switch (request.status) {
                    case 200:
                        console.log('OK');
                        processResponse(request.responseText);
                        break;
                    case 404:
                        console.log('Error');
                        break;
                }
            }
        }


        function processResponse(text){

            var data = JSON.parse(text);
            console.log(data);

            //Limpiar arreglo.
            this.posts=[];
        
        
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var post = data[key];

                    if (post.userId === user.userid){
                        
                        posts.push(new Post(post.title,post.body, post.userId));
                    }
                    
                }
            }
                        
                       
            for (let i = 0; i < posts.length; i++) {
                
                const post = posts[i];
                new PostComponent(post, divPosts, null);
                
            } 
            
        }  

}

