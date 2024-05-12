  /*
 POUR AVOIR un TOKEN
     curl -X POST "https://accounts.spotify.com/api/token" \
     -H "Content-Type: application/x-www-form-urlencoded" \
     -d "grant_type=client_credentials&client_id=28b53b20a6604ac1bb039f1069b2c9bb&client_secret=77aba083c6f048359b67356784cb3c13"
*/


// l'entête de la requête avec le token
const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer BQAVaqGvJE7m1CKrEmTn7JEeOcD-5ib-zJhNMSeNFIDUt3whdjisp4h4oYPeXlkZp3LZzgl7LvKN8OWwKHil5jNHu6zS7nbMeQ5hwItppArcDqRUvYU"
};
const fetchOptions = { headers: headers };
const url = "https://api.spotify.com/v1/search?type=album&market=FR&limit=10&q="
// événement validation (submit) du formulaire
document.getElementById("fm").addEventListener("submit", chercherAlbums);

function chercherAlbums(event) {
  // empecher le rechargement de la page
  event.preventDefault();

  let motcle = document.getElementById("motcle").value

  fetch(url+motcle, fetchOptions)
  .then( (response) => {
      return response.json()
  })
  .then( (dataJSON) => {
      console.log(dataJSON)
      afficheAlbums(dataJSON.albums.items)
  })
  .catch( (error) => console.log(error))
}
function afficheAlbums(albums) {
  let res = ""
  for (let album of albums) {
      res = res + '<img id="'+album.id+'" src="'+album.images[1].url+'"/>'
  }
  document.getElementById("albums").innerHTML = res
  // gérer événement click sur les images
  for (let elem of document.querySelectorAll("#albums > img")) {
    elem.addEventListener("click",detailsAlbum);
  }
}
function detailsAlbum(event) {
	// id de l'album sur lequel on a cliqué ?
    let idAlbum = event.target.id
    let url = "https://api.spotify.com/v1/albums/"+idAlbum;
            
    fetch(url, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        afficheDetailAlbum(dataJSON)
    })
    .catch( (error) => console.log(error))
}

function afficheDetailAlbum(album) {
  //console.log(album);
    document.getElementById("disque").textContent = album.name
    document.getElementById("chanteur").textContent = album.artists[0].name
    
    let res = "<ul>"
    for (let chanson of album.tracks.items) {
        res += '<li id="' + chanson.id +'">' + chanson.name 
        if (chanson.preview_url) {
          res += '<audio id=”AudioSong” controls src="'+chanson.preview_url+'">pas supporté</audio>'
        }
        res += '</li>'
    }
    document.getElementById("chansons").innerHTML = res
    // écouter la première chanson si elle existe"    

}
function afficheErreur(erreur) {
	console.log(erreur);
}