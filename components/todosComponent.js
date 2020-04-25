function TodosComponent(callback) {
    //Se llama a toda la estructura.
    AppComponent.call(this);
}


TodosComponent.prototype = Object.create(AppComponent.prototype);
TodosComponent.prototype.constructor = TodosComponent;


TodosComponent.prototype.showBeeDetailsTODO = function (user) {
         
    document.getElementById('divTodos').innerHTML='';
    var divTodos = document.getElementById('divTodos'); 
    
    var h1Todos = document.createElement('h1');
    h1Todos.innerHTML = "Bee´s ToDos";
    h1Todos.classList.add('h1Todos');
   
    divTodos.appendChild(h1Todos);


    this.todos = [];

    var url = 'https://beehive-270a2.firebaseio.com/data/todos.json';
    
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
        this.todos = [];
    
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                var todo = data[key];

                if (todo.userId === user.userid){

                    todos.push(new Todo(todo.id,todo.completed,todo.title,todo.userId));

                }
                
            }
        }
                    
                   
        for (let i = 0; i < todos.length; i++) {
            
            const todo = todos[i];
            new TodoComponent(todo, divTodos, null);

        } 
        
    }  

}