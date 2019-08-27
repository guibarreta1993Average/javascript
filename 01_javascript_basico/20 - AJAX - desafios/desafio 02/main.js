var buttonElement = document.querySelector('body button#buscar');
buttonElement.onclick = function(){
    var inputElement = document.querySelector('body input#user');
    var valor = inputElement.value;
    buscarUsuario(valor);
}

function renderElements(users){
    var listElement  = document.querySelector('ul#users');
    for(user of users){
        var liElement = document.createElement('li');
        var text = document.createTextNode(user.name);
        var link = document.createElement('a');
        link.setAttribute('href',user.clone_url);
        link.setAttribute('target','_blank');
        link.appendChild(text);
        liElement.appendChild(link);
        listElement.appendChild(liElement);
    }
}

function buscarUsuario(valor){
    // text = 'https://api.github.com/users/' + valor +'/repos';
    text = `https://api.github.com/users/${valor}/repos`;
    console.log(text);
    axios.get(text)
    .then(function(response){
        console.log(response.data)
        renderElements(response.data);
    })
    .catch(function(error){
        console.warn(error);
    });
}