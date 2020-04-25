class TodoComponent {
    constructor(todoRecibido, todosContainerRecibido, callback) {

        //Aquí se va añadiendo cada bee enviado desde todosComponents. 
        this.todo = todoRecibido;


        //Div que agrupa el div de info y el div de botones de cada todo.
        this.DivAgrupaDivsTodo = document.createElement('div');
        this.DivAgrupaDivsTodo.id = 'DivAgrupaDivsTodo';
        this.DivAgrupaDivsTodo.classList.add('DivAgrupaDivsTodo');

        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo la info del todo.
        var DivInfoTodo = document.createElement('div');
        DivInfoTodo.id = 'DivInfoTodo';//beeRecibido.name;
        DivInfoTodo.classList.add('DivInfoTodo');
        
        this.titleP = document.createElement('p');
        this.titleP.innerHTML = todoRecibido.userId + ' TITLE ' + todoRecibido.title + ' USER ID ' + todoRecibido.userId;
        this.titleP.classList.add('todoP');
        
        DivInfoTodo.appendChild(this.titleP);
        
        //-----------Aquí estaba el botón pero quedaba antes del DivNameBodyPost.
        
        /////////////////////////////////////////////////////////////////////
        
        
        /////////////////////////////////////////////////////////////////////
        //Div que almacena sólo el botón del ToDo.
        var DivBotonToDo = document.createElement('div');
        DivBotonToDo.id='Boton'+ todoRecibido.userId;
        DivBotonToDo.classList.add('DivBotonTodo');

        //El botón se añade aquí para quede después del DivNameBodyPost
        var btnEstadoTodo = document.createElement('button');
        

        if (todoRecibido.completado == '0'){
            btnEstadoTodo.innerHTML='Incomplete';
            
        }else
        {
            btnEstadoTodo.innerHTML='Completed';
        }

        btnEstadoTodo.classList.add('BotonTodo');
        
        DivBotonToDo.appendChild(btnEstadoTodo);


        /////////////////////////////////////////////////////////////////////
        //Agregamos al DivAgrupaDivsTodo los div anteriores (Info y Botones)
        this.DivAgrupaDivsTodo.appendChild(DivInfoTodo);
        this.DivAgrupaDivsTodo.appendChild(DivBotonToDo);

        //El valor de todosContainerRecibido sería divTodos.
        todosContainerRecibido.appendChild(this.DivAgrupaDivsTodo);
        

        this.callback = callback;
        
        
        //this.DivAgrupaDivsBee.onclick = this.showUserDetails.bind(this);     
        //btnPost.onclick = this.showUserDetails.bind(this);

    }

    showUserDetails(e) {
        //console.log( this);
        //this.callback(this.todo);
    }
}