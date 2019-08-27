const arr = [1,3,4,6,9,10];

var newArr = arr.map(item => item *2);
console.log(newArr);

var newArr = arr.map((item,index)=> item*index);
console.log(newArr);

var mensagem = ()=> console.log("Hello World");

mensagem();

var usuario = ()=>({nome: "Cleiton", idade: 37});
console.log(usuario());