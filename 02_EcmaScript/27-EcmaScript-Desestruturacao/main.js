const usuario = {
    nome: "Guilherme",
    idade: 37,
    endereco:{
        cidade:"Campinas",
        rua: "Maria Emilia Alves dos Santos de Angelis",
        numero: 324
    }
}

const {nome, idade, endereco:{cidade,rua,numero}} = usuario;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(rua);
console.log(numero);