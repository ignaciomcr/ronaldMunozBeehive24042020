function AlbumesComponent(callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);

     
    //Se añade el contenedorPricipal al documento actual.
    //this.contenedorPrincipal ES UN OBJETO DEFINIDO EL appComponent, 
    //cuya inicialización se da con AppComponent.call(this).
    
    
    /* document.body.appendChild(this.contenedorPrincipal);

    var divAlbumes = document.getElementById('divAlbumes'); */
        
   
}


AlbumesComponent.prototype = Object.create(AppComponent.prototype);
AlbumesComponent.prototype.constructor = AlbumesComponent;


AlbumesComponent.prototype.showBeeDetailsALBUM = function (user) {
         
    document.getElementById('divAlbumes').innerHTML='';
    var divAlbumes = document.getElementById('divAlbumes'); 

    var h1Album = document.createElement('h1');
    h1Album.innerHTML = "Bee´s Album";
    h1Album.classList.add('h1Album');
   
    divAlbumes.appendChild(h1Album);

    CargaFotos(user);

    //lo de carga2

    /////





}

function CargaFotos(user){

    this.user=user;
    
    this.fotos = [];
    

    var url = 'https://beehive-270a2.firebaseio.com/data/photos.json';
    
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = processRequest; 
    

    function processRequest(e) {
        var request = e.target;

        if (request.readyState === 4) {
            switch (request.status) {
                case 200:
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
        this.fotos=[];

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                
                var foto = data[key];
                               //idPhoto,idAlbum,title,urlImagen
                     fotos.push(new Photo(foto.id,foto.albumId,foto.title,foto.thumbnailUrl));

            }
        }
        cargaAlbum(this.user);
        
        
    }  

    

}

function cargaAlbum(user){

    console.log(user);

    this.albumes = [];
    

    var url = 'https://beehive-270a2.firebaseio.com/data/albums.json';

    
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onreadystatechange = processRequest; 
    

    function processRequest(e) {
        var request = e.target;

        if (request.readyState === 4) {
            switch (request.status) {
                case 200:
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
        this.albumes=[];

        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                
                var album = data[key];

                if (album.userId === user.userid){
                        
                     albumes.push(new Album(album.id,album.title,album.userId));

                }
                
            }
        }
        
        
        albumes.sort();



        for (let i = 0; i < albumes.length; i++) {
            
            const album = albumes[i];
            new AlbumComponent(album, divAlbumes,fotos,null);
            
        }
        
    }  
    
}


