var listElement = document.querySelector('div#app ul');
var inputElement = document.querySelector('div#app input');
var buttonElement = document.querySelector('div#app button'); 

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat'
]


function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var liElement = document.createElement('li');
        var text = document.createTextNode(todo);
        var referencia = document.createElement('a');
        referencia.setAttribute('href', '#');
        var pos = todos.indexOf(todo);
        referencia.setAttribute('onclick','deleteTodo('+pos+')');
        var excluir = document.createTextNode(" Excluir");
        referencia.appendChild(excluir);
        liElement.appendChild(text);
        liElement.appendChild(referencia);
        listElement.appendChild(liElement);  
    }
}

function addTodo(){
    var todo = inputElement.value;
    todos.push(todo);
    renderTodos();
}

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}

renderTodos();

