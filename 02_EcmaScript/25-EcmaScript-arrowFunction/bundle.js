"use strict";

var arr = [1, 3, 4, 6, 9, 10];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);
var newArr = arr.map(function (item, index) {
  return item * index;
});
console.log(newArr);

var mensagem = function mensagem() {
  return console.log("Hello World");
};

mensagem();

var usuario = function usuario() {
  return {
    nome: "Cleiton",
    idade: 37
  };
};

console.log(usuario());
