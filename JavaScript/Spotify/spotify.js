// l'entête de la requête avec le token
const headers = {
  "Content-Type": "application/json",
  Authorization:
    "Bearer BQAIm1luRCfEEIlH2HAHadfnG-4qAU0Lni4CAGu6yg9frIP4lcMDWDDePHUrLxlcZ54z1by0wZuCVUwxw9zGl5B7PYwkq_EuLcmcuNowt6CXMO1IcnY",
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

  let motcle = document.getElementById("motcle").value;

  let resultElt = document.getElementById("results");
  resultElt.innerHTML = "";

  fetch(url + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // Traiter ici le résultat de la requette
      console.log(dataJSON);
      dataJSON.albums.items.forEach((element) => {
        console.log(element.name);
        let albumId = element.id;
        let imageSrc = element.images[2].url;
        console.log(imageSrc);
        resultElt.innerHTML +=
          "<img id='" + element.id + "' src='" + imageSrc + "'/>";
      });

      let imgList = document.getElementsByTagName("img");
      console.log(imgList);
      for (let imageBox of imgList) {
        imageBox.addEventListener("click", function (event) {
          console.log(imageBox.id);
          provideAlbumsDetails(imageBox.id);
        });
      }
    })
    .catch((error) => console.log(error));
}

const urlAlbumDetails = "https://api.spotify.com/v1/albums/";

function provideAlbumsDetails(albumId) {
  fetch(urlAlbumDetails + albumId, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // Traiter ici le résultat de la requette
      console.log(dataJSON);
      document.getElementById("disque").innerText = dataJSON.name;
      document.getElementById("chanteur").innerText = dataJSON.artists[0].name;
      // document.getElementById("disque").innerText = dataJSON.name;

      let res = "<ul>";
      for (let song of dataJSON.tracks.items) {
        res += '<li id="' + song.id + '">' + song.name;
        if (song.preview_url != null) {
          res +=
            "<audio id='AudioSong' controls src='" +
            song.preview_url +
            "'></audio>";
        }
        res += "</li>";
      }
      document.getElementById("chansons").innerHTML = res;
      console.log(res);
    })
    .catch((error) => console.log(error));
}
