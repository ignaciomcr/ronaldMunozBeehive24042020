function Prueba(callback) {

    //AppComponent.call(this);
    
 
              


}

Prueba.prototype = Object.create(AppComponent.prototype);
Prueba.prototype.constructor = Prueba;

Prueba.prototype.showBeeDetailsPOST = function (user) {
         
    
            console.log('Aquí debería mostrar los posts filtrados');


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
                
                    this.posts=[];
                
                    for (var key in data) {
                        if (data.hasOwnProperty(key)) {
                            var post = data[key];
                            //debugger;
                            if (post.userId === user.userid){
                                
                                posts.push(new Post(post.title,post.body, post.userId));
                            }
                            
                        }
                    }
                
                    //console.log('En app.js es donde se envía el callback = obj BeeDetailComponent con sus funciones');
                    
                    //var postsComponent =
                     
                    
                   console.log(posts);

                    new PostsComponent(posts, showBeeDetails);
                    
                    //var beeDetailComponent = new BeeDetailComponent(onBack);
                
                
                    //UIMANAGER
                    function showBeeDetails(post) {
                        
                        //---------------------Esta línea oculta todo el esquema.
                        //beesComponent.hide();
                        //beeDetailComponent.showBeeDetails(post);
                        
                    }
                
                    function onBack() {
                        //beesComponent.show();
                        //beeDetailComponent.hide();
                    }
                
                    
                }  
                                
                    
                    /////Estas líneas son las que muestran los elementos en el divPosts
                    
                    
                    //this.userDetailName.innerHTML = user.name;
                    //this.userDetailEmail.innerHTML = user.email;
                    //this.userDetailPhone.innerHTML = user.phone; 
        




}