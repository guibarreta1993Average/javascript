const arr = [1,3,4,5,8,9];

var newArr = arr.map(function(item){
    return item*2;
});
console.log(newArr);

newArr = arr.map(function(item, index){
    return item*index;
});

console.log(newArr);

const soma_canonica = arr.reduce(function(atual, proximo){
    return atual + proximo;
});

console.log(soma_canonica);

const pares = arr.filter(function(el){
    return el%2 ===0;
});

console.log(pares);