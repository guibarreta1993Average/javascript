class todoList{
    constructor(){
        this.todos = [];
    }

    addTodo(){
        this.todos.push("novo todo");
        console.log(this.todos);
    }
}

const minhaLista = new todoList();

document.querySelector('button#novotodo').onclick = function(){
    minhaLista.addTodo();
}
