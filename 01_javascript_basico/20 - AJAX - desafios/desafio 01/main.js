function checaIdade(idade) {
    return new Promise(function(res, rej){
        setTimeout(function(){
        return idade >=18? res():rej();
        },2000) 
    });
   }
   checaIdade(18)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    })
    console.log("já é adulto?")