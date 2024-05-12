let btnFilms = document.getElementById("films");
let filmList = document.getElementById("liste");

const url = "https://swapi.dev/api/films" // l’url de la ressource
let fetchOptions = { method: 'GET' } // les options de l'API fetch

// a) Ecrire le code HTML/js permettant d’afficher la liste des titres des 
// films lors du clic sur un bouton
btnFilms.addEventListener('click', function (event) {
    // executer la req AJAX
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json()
        })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            console.log(dataJSON) // ici le traitement des données …
            // pour affichage dans le navigateur
            let films = dataJSON.results;
            for (let element of films) {
                let textToShow = element.title + " (épisode " + element['episode_id'] + ")" + " - " + element.release_date ;
                console.log(textToShow);
                filmList.innerHTML += "<li>"+ textToShow + "</li>";
            };
            
        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
})

const urlPeople = "https://swapi.dev/api/people";

let btnFilterIndiv = document.getElementById("filterIndiv");
let indivTextInput = document.getElementById("filter");
let dropDownOutput = document.getElementById("individuals");

btnFilterIndiv.addEventListener('click', function (event) {
    urlFilter = urlPeople + "?search=" + indivTextInput.value;
    console.log("URL Filter = " + urlFilter);
    // executer la req AJAX
    fetch(urlFilter, fetchOptions)
        .then((response) => {
            return response.json()
        })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            console.log(dataJSON) // ici le traitement des données …
            // pour affichage dans le navigateur
            let individuals = dataJSON.results;
            dropDownOutput.innerHTML = "";
            for (let individual of individuals) {
                let textToShow = individual.name;
                console.log(textToShow);
                dropDownOutput.innerHTML += 
                    "<option value =" + 
                    textToShow + 
                    ">"+ 
                    textToShow + 
                    "</option>";
            };
            
        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
})