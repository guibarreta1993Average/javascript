
const usuario= (nome,idade, peso)=>{
    return {
        nome,
        idade,
        peso,
        empresa:'Average'
    }
} 

console.log(usuario("Guilherme", 28,  90.5))