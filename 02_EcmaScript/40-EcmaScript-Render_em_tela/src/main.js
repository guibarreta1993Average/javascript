class App {
    constructor(){
        this.repositorios = []
        this.formEl = document.getElementById('repo-form')
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = event =>this.addRepository(event)
    }

    addRepository(event){
        event.preventDefault()
        this.repositorios.push({
            name: 'rocketseat.com.br',
            description: 'Tire a sua ideia do papel e dê vida a sua startup.',
            avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url: 'http://github.com/rocketseat/rocketseat.com.br'
        })
        this.render()
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
