import api from './api'
class App {
    constructor(){
        this.repositorios = []
        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')
        this.inputEl = document.querySelector('input[name = repository]')
        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = event =>this.addRepository(event)
    }

    async addRepository(event){
        event.preventDefault()
        const repoInput = this.inputEl.value
        // console.log(repoInput)
        if(repoInput.length===0) return
        
        const response = await api.get(`/repos/${repoInput}`)
        //console.log(response)
        const {name, description, owner:{avatar_url}, html_url } =response.data
  
        this.repositorios.push({
            name,
            description,
            avatar_url,
            html_url
        })
        this.render()
        this.inputEl.value = '';
    }

    render(){
        this.listEl.innerHTML = '';
        this.repositorios.forEach(repo =>{
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)
            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))
            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))
            let linkEl = document.createElement('a')
            linkEl.setAttribute('target','_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))
            
            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)
            this.listEl.appendChild(listItemEl)
        })
    }
}

 new App()
