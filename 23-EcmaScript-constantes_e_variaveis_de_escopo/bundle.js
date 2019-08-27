"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var a = 3;
var vetorA = [2, 3, 1];
var b = 3;
var vetorB = [2, 3, 1];
var usuario = {
  nome: "Guilherme"
};

try {
  a = 5;
  console.log(a);
  b = (_readOnlyError("b"), 5);
} catch (_unused) {
  console.log("Erro!! Não é possível reatribuir o valor");
}

try {
  vetorA = 7;
  console.log(vetorA);
  vetorB = (_readOnlyError("vetorB"), 7);
} catch (_unused2) {
  console.log("Erro!! não é possível alterar o tipo da variável");
} //adicionando um elemento na vetor constante


vetorB[3] = 10;
console.log(vetorB); //mutar uma variável constante

usuario.nome = "Cantor";
console.log(usuario); //variável de escopo

function teste(x) {
  if (x > 5) {
    var y = 3;
    var _z = 7;
  }

  try {
    console.log(y);
    console.log(z);
  } catch (_unused3) {
    console.log("variável z está dentro do escopo if");
  }
}

teste(10);
