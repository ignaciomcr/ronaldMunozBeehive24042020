class PostComponent {
    constructor(postRecibido, postsContainerRecibido, callback) {

        //Aquí se va añadiendo cada post enviado desde postsComponents. 
        this.post = postRecibido;

        //Div que agrupa el div de info y el div de botones de cada Bee.
        this.DivAgrupaDivsPost = document.createElement('div');
        this.DivAgrupaDivsPost.id = 'DivAgrupaDivsPost';
        this.DivAgrupaDivsPost.classList.add('DivAgrupaDivsPost');

        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo la info del post.
        var DivInfoPost = document.createElement('div');
        DivInfoPost.id = 'DivInfoPost';//beeRecibido.name;
        DivInfoPost.classList.add('DivInfoPost');
        
        this.titleP = document.createElement('p');
        this.titleP.innerHTML = postRecibido.userId + ' TITLE ' + postRecibido.title;
        this.titleP.classList.add('postP');
        
        this.renglonP = document.createElement('br');

        this.bodyP = document.createElement('p');
        this.bodyP.innerHTML = 'BODY ' + postRecibido.body;
        this.bodyP.classList.add('postP');

        DivInfoPost.appendChild(this.titleP);
        DivInfoPost.appendChild(this.renglonP);
        DivInfoPost.appendChild(this.bodyP);
        //-----------Aquí estaba el botón pero quedaba antes del DivNameBodyPost.
        
        /////////////////////////////////////////////////////////////////////
        
        
        /////////////////////////////////////////////////////////////////////
        //Este Div está almacenado dentro del DivInfoPost Y ALMACENA el Name y Body (que no sé de dónde salen). Este div .
        var DivNameBodyPost = document.createElement('div');
        DivNameBodyPost.id='DivNameBodyPost'+ postRecibido.userId ;
        DivNameBodyPost.classList.add('DivNameBodyPost');

        this.namePost = document.createElement('p');
        this.namePost.innerHTML = 'USER ID ' + postRecibido.userId;
        this.namePost.classList.add('postP');
        
        DivNameBodyPost.appendChild(this.namePost);

        

        /* var btnAlbum = document.createElement('button');
        btnAlbum.innerHTML='Album';
        btnAlbum.classList.add('beeContainerButton');

        var btnToDo = document.createElement('button');
        btnToDo.innerHTML='ToDo';
        btnToDo.classList.add('beeContainerButton');      */ 


        
        //DivBotonesPost.appendChild(btnAlbum);
        //DivBotonesPost.appendChild(btnToDo);


        DivInfoPost.appendChild(DivNameBodyPost);

        //El botón se añade aquí para quede después del DivNameBodyPost
        var btnNewCommentPost = document.createElement('button');
        btnNewCommentPost.innerHTML='New comment';
        btnNewCommentPost.classList.add('postContainerButton');
        DivInfoPost.appendChild(btnNewCommentPost);


        this.DivAgrupaDivsPost.appendChild(DivInfoPost);
        

        //El valor de beesContainerRecibido sería divPost.
        
        postsContainerRecibido.appendChild(this.DivAgrupaDivsPost);
        

        this.callback = callback;
        
        
        //this.DivAgrupaDivsBee.onclick = this.showUserDetails.bind(this);     
        //btnPost.onclick = this.showUserDetails.bind(this);

    }

    showUserDetails(e) {
        //this.callback(this.post);
    }
}