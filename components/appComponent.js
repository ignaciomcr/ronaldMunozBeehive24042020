function AppComponent() {

    //Aquí se crea toda la estructura de la aplicación.

    this.contenedorPrincipal = document.createElement('div');
    this.contenedorPrincipal.id="divPrincipal";
    this.contenedorPrincipal.classList.add('divPrincipal');

    var divTitulo = document.createElement('div');
    divTitulo.id = 'divTitulo';
    divTitulo.innerHTML="The Beehive";
    divTitulo.classList.add('divTitulo');
    
    var divBees = document.createElement('div');
    divBees.id = 'divBees';
    divBees.classList.add('divBees');
    
    var h1Bees = document.createElement('h1');
    h1Bees.innerHTML = "Bees";
    h1Bees.classList.add('h1Bees');

    divBees.appendChild(h1Bees);


    var divPosts = document.createElement('div');
    divPosts.id = 'divPosts';
    divPosts.classList.add('divPosts');
  
    var h1Posts = document.createElement('h1');
    h1Posts.innerHTML = "Bee´s Posts";
    h1Posts.classList.add('h1Posts');
   
    divPosts.appendChild(h1Posts); 
    

    var divAlbum = document.createElement('div');
    divAlbum.id = 'divAlbumes';   
    divAlbum.classList.add('divAlbumes');
    
    var h1Album = document.createElement('h1');
    h1Album.innerHTML = "Bee´s Album";
    h1Album.classList.add('h1Album');
   
    divAlbum.appendChild(h1Album);
   

    var divTodos = document.createElement('div');
    divTodos.id = 'divTodos';
    divTodos.classList.add('divTodos');

    var h1Todos = document.createElement('h1');
    h1Todos.innerHTML = "Bee´s ToDos";
    h1Todos.classList.add('h1Todos');
   
    divTodos.appendChild(h1Todos);

    
    this.contenedorPrincipal.appendChild(divTitulo);
    this.contenedorPrincipal.appendChild(divBees);
    this.contenedorPrincipal.appendChild(divPosts);
    this.contenedorPrincipal.appendChild(divAlbum);
    this.contenedorPrincipal.appendChild(divTodos); 
  

}

AppComponent.prototype.hide = function () {
    this.contenedorPrincipal.hidden = true;
}

AppComponent.prototype.show = function () {
    this.contenedorPrincipal.hidden = false;
}