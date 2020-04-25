function BeesComponent(bees, callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
     
    //Se añade el contenedorPricipal al documento actual.
    //this.contenedorPrincipal ES UN OBJETO DEFINIDO EN EL appComponent, 
    //cuya inicialización se da con AppComponent.call(this).
    document.body.appendChild(this.contenedorPrincipal);

    var divBees = document.getElementById('divBees');
        

    for (let i = 0; i < bees.length; i++) {
        const bee = bees[i];
        
        //El parámetro callback es inicializado en app.js y trae "postsComponent.showBeeDetailsPOST(bee);"
        new BeeComponent(bee, divBees, callback);//sería PostsComponent.js
    }

}


BeesComponent.prototype = Object.create(AppComponent.prototype);
BeesComponent.prototype.constructor = BeesComponent;


