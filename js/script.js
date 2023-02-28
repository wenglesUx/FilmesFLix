
const btn = document.querySelector('.form__submit')


btn.addEventListener('click',require)
function require(e){
    e.preventDefault()
    const movie = document.querySelector('.form__input').value
    

    if(movie){
        const url = `http://www.omdbapi.com/?s=${movie}&apikey=43b1f4b4`
         const options ={
            method:'GET',
            mode: 'cors',
            redirect:'follow',
            cache:'default'
         }
         fetch(url,options)
         .then(response => response.json())
         .then(data =>{
            console.log(data)
            //construção de cards
            let newContent = '';
            for(let i=1; i < data.Search.length;i++){
                //aplicação de cards
                newContent += `<li class="app-movies-all__card">`;
                newContent += `<figure class="app-movies-all__figure">`;
                newContent += `<img class="app-movies-all__thumb" src="${data.Search[i].Poster}">`;
                newContent += `</figure>`;
                newContent += `<legend class="app-movies-all__legend">`;
                newContent  += `<span class="app-movies-all__year">${data.Search[i].Year}</span>`;
                newContent += `<h2 class="app-movie-all__title">${data.Search[i].title}</h2>`;
                newContent += `</legend>`;
                newContent += `</li>`;
            }
            document.getElementById('movies').innerHTML = newContent
         })
            
    } else{
        alert('Digite um filme!')
    }
}




/*const url = "http://www.omdbapi.com/?i=tt3896198&apikey=43b1f4b4"

const filmes = async () =>{
    const resposne = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=43b1f4b4")
    const data = resposne.json()
    console.log(data)


let banner = document.querySelector('#banner')

fetch("http://www.omdbapi.com/?s=nome-do-filme&apikey=sua-key")
.then(response => response.json())

.then(data => {



console.log(data)
})
}*/

