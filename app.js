const URL = "https://rickandmortyapi.com/api/character/?page=15"
const main = document.getElementById('main')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        
        const res = await fetch(URL)
        const data = await res.json()
        const arreglo = data.results
        
        pintarCards(arreglo)
        
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = arreglo => {
    arreglo.forEach(element => {
        template.querySelector('h3').textContent = element.name
        template.querySelector('p').textContent = element.gender 
        template.querySelector('img').src=element.image
        
        const clone = template.cloneNode(true)
        fragment.appendChild(clone)
    
    })
    main.appendChild(fragment)   
}