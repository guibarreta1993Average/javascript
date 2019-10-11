"use strict";

var usuario = {
  nome: "Guilherme",
  idade: 37,
  endereco: {
    cidade: "Campinas",
    rua: "Maria Emilia Alves dos Santos de Angelis",
    numero: 324
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    _usuario$endereco = usuario.endereco,
    cidade = _usuario$endereco.cidade,
    rua = _usuario$endereco.rua,
    numero = _usuario$endereco.numero;
console.log(nome);
console.log(idade);
console.log(cidade);
console.log(rua);
console.log(numero);
