class AlbumComponent {
    constructor(albumRecibido, albumsContainerRecibido, fotosRecibidas, callback) {

        //Aquí se va añadiendo cada album enviado desde albumesComponents. 
        this.album = albumRecibido;

        //Div que agrupa el div de info y el div de botones de cada post.
        this.DivAgrupaDivsAlbum = document.createElement('div');
        this.DivAgrupaDivsAlbum.id = 'DivAgrupaDivsAlbum';
        this.DivAgrupaDivsAlbum.classList.add('DivAgrupaDivsAlbum');

        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo la info del album.
        var DivInfoAlbum = document.createElement('div');
        DivInfoAlbum.id = 'DivInfoAlbum';//beeRecibido.name;
        DivInfoAlbum.classList.add('DivInfoAlbum');
        
        this.titleP = document.createElement('p');
        this.titleP.innerHTML = albumRecibido.userId + '-Album #'+ albumRecibido.idAlbum +'-Title: ' + albumRecibido.title;
        this.titleP.classList.add('albumP');
        
        this.renglonP = document.createElement('br');

        DivInfoAlbum.appendChild(this.titleP);
        DivInfoAlbum.appendChild(this.renglonP);
        //-----------Aquí estaba el botón pero quedaba antes del DivNameBodyPost.
        
        /////////////////////////////////////////////////////////////////////
        

        var fotos = [];
        fotos = fotosRecibidas;
        /*
                            //idPhoto,idAlbum,title,urlImagen
        fotos.push(new Photo(1,1,'Foto1Album1','urlImagen1'));
        fotos.push(new Photo(1,2,'Foto1Album2','urlImagen1'));
        fotos.push(new Photo(1,3,'Foto1Album3','urlImagen1'));
        fotos.push(new Photo(2,1,'Foto2Album1','urlImagen2'));
        fotos.push(new Photo(3,1,'Foto3Album1','urlImagen3')); */


        var DivImagen = document.createElement('div');
        DivImagen.id='DivImagen'+ albumRecibido.userId ;
        DivImagen.classList.add('DivImagen');

        var iCantidadMostrar = 0;

        for(var indice in fotos) {
            var foto = fotos[indice];
            if (albumRecibido.idAlbum === foto.idAlbum){
                iCantidadMostrar = iCantidadMostrar + 1;

                if (iCantidadMostrar <4 ){
                        this.namePost = document.createElement('p');
                        this.namePost.innerHTML = albumRecibido.userId + '-Title-' + foto.title;
                        this.namePost.classList.add('beeContainerP');
                        
                        DivImagen.appendChild(this.namePost); 
                }else
                {
                  break;
                }
            
            } 
            
            
        } 
        //DivImagen.appendChild(this.namePost); 

        /////////////////////sirve
        /* /////////////////////////////////////////////////////////////////////
        //Este Div está almacenado dentro del DivInfoPost Y ALMACENA el Name y Body (que no sé de dónde salen). Este div .
        var DivImagen = document.createElement('div');
        DivImagen.id='DivImagen'+ albumRecibido.userId ;
        DivImagen.classList.add('DivImagen');

        this.namePost = document.createElement('p');
        this.namePost.innerHTML = albumRecibido.userId + ' TÍTULO E IMAGEN ' + albumRecibido.nombre + ' ALBUM_ID '+ albumRecibido.idAlbum;
        this.namePost.classList.add('beeContainerP');
        
        DivImagen.appendChild(this.namePost); */

        /////////////////////sirve
        

        /* var btnAlbum = document.createElement('button');
        btnAlbum.innerHTML='Album';
        btnAlbum.classList.add('beeContainerButton');

        var btnToDo = document.createElement('button');
        btnToDo.innerHTML='ToDo';
        btnToDo.classList.add('beeContainerButton');      */ 


        
        //DivBotonesPost.appendChild(btnAlbum);
        //DivBotonesPost.appendChild(btnToDo);


        DivInfoAlbum.appendChild(DivImagen);

        this.DivAgrupaDivsAlbum.appendChild(DivInfoAlbum);
        

        //El valor de beesContainerRecibido sería divBees.
        albumsContainerRecibido.appendChild(this.DivAgrupaDivsAlbum);
        

        this.callback = callback;
        
        
        //this.DivAgrupaDivsBee.onclick = this.showUserDetails.bind(this);     
        //btnPost.onclick = this.showUserDetails.bind(this);

    }

    showUserDetails(e) {
        //console.log( this);
        //this.callback(this.album);
    }
}