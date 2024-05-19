// click sur le bouton ?
document.getElementById("films").addEventListener("click", listeFilms);
// au clic sur le bouton "liste"
document.getElementById("pers").addEventListener("click", listePersonnes);

// la fonction qui récupère les films et les affiche
function listeFilms() {
  const url = "https://swapi.dev/api/films/"; // l’url de la ressource
  let fetchOptions = { method: "GET" }; // les options de l'API fetch
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      console.log(dataJSON);
      let films = dataJSON.results;
      let res = "";
      // boucle sur le tableau
      for (let f of films) {
        res =
          res + "<li>" + f.title + " (épisode " + f.episode_id + ")" + "</li>";
      }
      document.getElementById("liste").innerHTML = res;
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}
