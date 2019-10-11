var a = 3;
var vetorA = [2,3,1];

const b = 3;
const vetorB = [2,3,1];
const usuario = {nome:"Guilherme"}

try{
    a = 5;
    console.log(a);
    b = 5;
}
catch{
    console.log("Erro!! Não é possível reatribuir o valor");
}

try{
    vetorA = 7;
    console.log(vetorA);
    vetorB = 7;
}
catch{
    console.log("Erro!! não é possível alterar o tipo da variável");
}

//adicionando um elemento na vetor constante
vetorB[3] = 10;
console.log(vetorB);

//mutar uma variável constante
usuario.nome = "Cantor";
console.log(usuario);

//variável de escopo
function teste(x){
    if(x > 5){
        var y = 3;
        let z = 7;
    }
    try{
        console.log(y);
        console.log(z);
    }
    catch{
        console.log("variável z está dentro do escopo if");
    }
}
teste(10);