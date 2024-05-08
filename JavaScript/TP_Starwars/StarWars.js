// click sur le bouton ?
document.getElementById("films").addEventListener("click", listeFilms)
// au clic sur le bouton "liste"
document.getElementById("pers").addEventListener("click", listePersonnes)

// la fonction qui récupère les films et les affiche
function listeFilms() {
    const url = "https://swapi.dev/api/films/" // l’url de la ressource
    let fetchOptions = { method : "GET" } // les options de l'API fetch
    fetch(url, fetchOptions)
    .then( (response) => {     
        return response.json()
    })
    .then( (dataJSON) => { // dataJSON = les données renvoyées
        console.log(dataJSON)
        let films = dataJSON.results
        let res = ""
        // boucle sur le tableau
        for (let f of films) {
            res = res + "<li>" + f.title 
                 + " (épisode "+ f.episode_id + ")"
                 + "</li>"
        }
        document.getElementById("liste").innerHTML = res
    })
    .catch( (error) => {  // gestion des erreurs
        	console.log(error)
    } )
}

// ======  liste des personnes ==========
function listePersonnes() {
    const urlPersonnes = "https://swapi.dev/api/people?search="
    const fetchOptions = {}
    let nom = document.getElementById("nom").value
    console.log(nom)
    fetch(urlPersonnes+nom, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        let personnes = dataJSON.results;
        let res = "";
        for (let p of personnes) {
            res = res + '<option>' + p.name + '</option>'; 
        }
        document.getElementById("personnes").innerHTML = res;
    })
    .catch( (error) => console.log(error))
}













/*


const urlFilms = "https://swapi.co/api/films/";
const urlPersonnes = "https://swapi.co/api/people?search="
const fetchOptions = {}

// au clic sur le bouton "liste des films"
document.getElementById("films").addEventListener("click", listeFilms)

// au clic sur le bouton "liste"
document.getElementById("pers").addEventListener("click", listePersonnes)


// ======  liste des films ==========
function listeFilms() {
    fetch(urlFilms, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        let films = dataJSON.results;
        let res = "";
        for (let f of films) {
              res = res + '<li>' + f.title + ' (épisode '+ f.episode_id + ')'+'</li>';    
        }
        document.getElementById("liste").innerHTML = res;
    })
    .catch( (error) => console.log(error))
}



// ======  liste des personnes ==========
function listePersonnes() {
    let nom = document.getElementById("nom").value
    console.log(nom)
    fetch(urlPersonnes+nom, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        let personnes = dataJSON.results;
        let res = "";
        for (let p of personnes) {
            res = res + '<option>' + p.name + '</option>'; 
        }
        document.getElementById("personnes").innerHTML = res;
    })
    .catch( (error) => console.log(error))
}

/*
$(document).ready(function(){
      $("#films").click(listeFilms);
      $("#pers").click(listePersonnes);
})
function listeFilms(event) {
      let url = "https://swapi.co/api/films/";
      $.get(url,null,afficherFilm,"json");
}
function listePersonnes(event) {
      if ($("#nom").val().length > 2) {
            let url = "https://swapi.co/api/people?search="+$("#nom").val();
            $.get(url,null,afficherPersonnes,"json");
      }
}
function afficherFilm(datas) {
      let films = datas.results;
      $("#liste").html("");
      let res="";
      for (let f of films) {
            res = res + '<li>' + f.title + ' (épisode '+ f.episode_id + ')'+'</li>';    
      }
      $("#liste").append(res);
}
function afficherPersonnes(datas) {
      $("#personnes").html("");
      let personnes = datas.results;
      let res="";
      for (let pers of personnes) {
            res = res + '<option>' + pers.name + '</option>';
      }
      $("#personnes").append(res);
}
*/