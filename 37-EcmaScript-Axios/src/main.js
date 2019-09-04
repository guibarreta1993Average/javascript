import axios from 'axios';
class Api {
    static async getUserInfo(username){
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        }
        catch(erro){
            console.log('Erro na API')
        }
    }
}

Api.getUserInfo('12354rswetqr213452354')
Api.getUserInfo('diego3g')