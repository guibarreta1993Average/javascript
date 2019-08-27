axios.get('https://api.github.com/users/diego3g')
    .then(function(response){
        console.log(response.data.login);
    })
    .catch(function(error){
        console.warn(error);
    });