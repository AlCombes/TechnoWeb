// l'entête de la requête avec le token
const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQALJjKcHlCrfCuDgbUCIBvn6QzlTQAokDELj1sE_4IX9LU716aEeEOf8VqpBjY-GqTKabctxRnCG-oSQ3j_zkfRGOCMINzLxU1uIsPNItJRO8Kazb4",
};
const fetchOptions = { headers: headers };
// l'url de recherche d'albums
const url =
  "https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q=";

// événement validation (submit) du formulaire
document.getElementById("fm").addEventListener("submit", chercherAlbums);

function chercherAlbums(event) {
  // empecher le rechargement de la page
  event.preventDefault();

  let motcle = "jardin";

  fetch(url + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => console.log(error));
}
