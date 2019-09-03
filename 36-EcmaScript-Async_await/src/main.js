// import { resolve } from "upath";

const minhaPromisse = (timeout) => new Promise((resolve, reject) =>
    setTimeout(() => {resolve('OK')    
    }, timeout))

/*minhaPromisse(3000).then(response=> {
    console.log(response)
})
.catch(err=>{
    console.log('erro!!')
})*/

//vira uma função Promisse
async function executaPromisse(timeout){
    //um await deve esperar o await anterior
    console.log(await minhaPromisse(timeout*3)+ " tempo: "+ timeout + "ms primeiro!")
    console.log(await minhaPromisse(timeout*2)+ " tempo: "+ timeout + "ms segundo!")
    console.log(await minhaPromisse(timeout)+ " tempo: "+ timeout + "ms terceiro!")

    //equivalente ao código abaixo
    /*minhaPromisse(timeout*3).then(response =>{
        console.log(response + " tempo: "+ timeout + "ms primeiro")
        minhaPromisse(timeout*2).then(response =>{
            console.log(response + " tempo: "+ timeout + "ms segundo")
            minhaPromisse(timeout).then(response =>{
                console.log(response + " tempo: "+ timeout + "ms terceiro")
            })
        })
    })*/
}

executaPromisse(1000);
executaPromisse(500);
console.log('essa mensagem é executada mais rápida')