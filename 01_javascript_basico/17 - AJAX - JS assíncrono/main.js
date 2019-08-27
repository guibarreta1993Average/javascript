var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.github.com/users/diego3g');
xhr.send(null);

xhr.onreadystatechange = function(){

    if(xhr.readyState == '4'){
        if(xhr.status == '200'){
            var data = JSON.parse(xhr.responseText)
            console.log(data.login)
        }else{
            console.log('Erro ao recuperar o usuário');
        }
    } 
}