
const usuario1 = {
    nome: "Guilherme",
    idade:37,
    peso: 87.5,
    empresa: "Average"
}

const arr = [1,2,4,5,7,11,12,14,16,19,20,21]

//REST
const {nome, ...informacoes} = usuario1
console.log(nome)
console.log(informacoes)

const [a,b,c,...outros_elementos]= arr
console.log(a)
console.log(b)
console.log(c)
console.log(outros_elementos)

function soma(a,b,c,d,...params){
    var soma = a*b + c*d
    console.log(params)
    var resto = params.reduce((atual,proximo)=> atual + proximo)
    return soma + resto
}

//passando array como parâmetro
console.log(soma(...arr))

//SPREAD
 const arr1 = [1,2,3,4]
 const arr2 = [5,6,7,8,9]
 const arr3  = [...arr1,...arr2]
 console.log(arr3)

 const usuario2 = {...usuario1, nome:"Gilberto", idade: 26}
 console.log(usuario2)

