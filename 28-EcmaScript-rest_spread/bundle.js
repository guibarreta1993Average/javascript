"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var usuario1 = {
  nome: "Guilherme",
  idade: 37,
  peso: 87.5,
  empresa: "Average"
};
var arr = [1, 2, 4, 5, 7, 11, 12, 14, 16, 19, 20, 21]; //REST

var nome = usuario1.nome,
    informacoes = _objectWithoutProperties(usuario1, ["nome"]);

console.log(nome);
console.log(informacoes);
var a = arr[0],
    b = arr[1],
    c = arr[2],
    outros_elementos = arr.slice(3);
console.log(a);
console.log(b);
console.log(c);
console.log(outros_elementos);

function soma(a, b, c, d) {
  var soma = a * b + c * d;

  for (var _len = arguments.length, params = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    params[_key - 4] = arguments[_key];
  }

  console.log(params);
  var resto = params.reduce(function (atual, proximo) {
    return atual + proximo;
  });
  return soma + resto;
} //passando array como parâmetro


console.log(soma.apply(void 0, arr)); //SPREAD

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8, 9];
var arr3 = [].concat(arr1, arr2);
console.log(arr3);

var usuario2 = _objectSpread({}, usuario1, {
  nome: "Gilberto",
  idade: 26
});

console.log(usuario2);
