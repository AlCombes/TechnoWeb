// l'entête de la requête avec le token
const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQCm2IFU4BJ3sn21Y_9mFqilhs4w33we-mwYuGnf2xa2uz5zA0Wp-5Eo4Qf4QXDxHhJO47rx120piAvkSjndRH3o29TUq76z_cFTpdxItHeUxs7w0Fk",
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

  let motcle = "";

  fetch(url + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
    })
    .catch((error) => console.log(error));
}
