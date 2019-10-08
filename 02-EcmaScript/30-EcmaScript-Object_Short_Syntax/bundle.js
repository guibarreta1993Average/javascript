"use strict";

var usuario = function usuario(nome, idade, peso) {
  return {
    nome: nome,
    idade: idade,
    peso: peso,
    empresa: 'Average'
  };
};

console.log(usuario("Guilherme", 28, 90.5));
