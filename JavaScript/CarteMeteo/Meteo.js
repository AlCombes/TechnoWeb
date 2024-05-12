let formu = document.getElementById("formular");
let citiesDiv = document.getElementById("cities")
let myAPPID = "7728fae2497e5a2724b7a12f0d727382";

let testMeteo = "http://api.openweathermap.org/data/2.5/weather?lat=43.6036776&lon=2.2417954&units=metric&lang=fr&format=json&appid=7728fae2497e5a2724b7a12f0d727382"

let fetchOptions = { method: 'GET' } // les options de l'API fetch
console.log("toto");
// a) Ecrire le code HTML/js permettant d’afficher la liste des titres des 
// films lors du clic sur un bouton
formu.addEventListener('submit', function (event) {
    event.stopPropagation();
    event.preventDefault();
    let cityName = document.getElementById("cityName").value;
    console.log(cityName);
    const url = "https://nominatim.openstreetmap.org/search?city=" + cityName + "&state=France&units=metric&lang=fr&format=json&addressdetails=1";// l’url de la ressource
    console.log(url);
    // executer la req AJAX
    fetch(url, fetchOptions)
        .then((response) => {
            return response.json()
        })
        .then((dataJSON) => { // dataJSON = les données renvoyées
            citiesDiv.innerHTML = "";
            console.log(dataJSON) // ici le traitement des données …   
            for (let element of dataJSON) {
                if ((element.address.town == cityName) || (element.address.village == cityName)) {
                    console.log(element.address.county);
                    let bb = element.boundingbox;
                    citiesDiv.innerHTML +=
                        "<div>"
                        + "<p>Département : " + element.address.county + "</p>"
                        + "<p>Lat : " + element.lat + "</p>"
                        + "<p>Lat : " + element.lon + "</p>"
                        // + "<p>"+"bas: "+bb[0]+" haut: "+bb[1]+" gauche: "+bb[2]+" droit: "+bb[3]+"</p>";
                        + "<iframe width=\"425\" height=\"350\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" src=\"http://www.openstreetmap.org/export/embed.html?bbox="+ bb[2] + ',' + bb[0] + ',' + bb[3] + ',' + bb[1] +"&amp;layer=mapnik\" style=\"border: 1px solid black\"></iframe>"
                        + "<br>"
                        + "</div > "
                }
            }
        })
        .catch((error) => { // gestion des erreurs
            console.log(error)
        })
})