// ======= Nominatim =======
const urlNominatim = "https://nominatim.openstreetmap.org/search?state=France&units=metric&lang=fr&format=json&addressdetails=1&city=";
const fetchOptions = {}


document.getElementById("villes").addEventListener("click",villes)

function villes() {
	let ville = document.getElementById("ville").value
	document.getElementById("resultat").innerHTML =""
	console.log(ville)
	
    fetch(urlNominatim + ville, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        let villes = dataJSON;
        let txtHtml = "";
        for (let v of villes) {
			if (v.address.town == ville || v.address.village == ville) {
				// recup de la bounding box
				bdgBox = v.boundingbox;
				// txtHtml = txtHtml + "<p>"+"bas: "+bdgBox[0]+" haut: "+bdgBox[1]+" gauche: "+bdgBox[2]+" droit: "+bdgBox[3]+"</p>";
				txtHtml = '<div id="' + v.place_id + '" style="clear:both"><h2>' + v.display_name + '</h2>' ;
				txtHtml += '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openstreetmap.org/export/embed.html?bbox='+ bdgBox[2] + ',' + bdgBox[0] + ',' + bdgBox[3] + ',' + bdgBox[1] +'&amp;layer=mapnik" style="border: 1px solid black"></iframe>';
				txtHtml +=  '</div>';
				document.getElementById("resultat").innerHTML += txtHtml;
				meteo(v.place_id, v.lat, v.lon);
			}
		}
		
    })
    .catch( (error) => console.log(error))

}

// ========== Meteo ======
function meteo(id, lat, lon) {

	let urlMeteo = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon +"&units=metric&lang=fr&format=json&appid=1f49990935a083d943c8264835d568f3";
	fetch(urlMeteo, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
		let donneesMeteo = dataJSON
		let res = "<table>"
		res += "<tr><td>Ville</td><td>" + donneesMeteo.name + "</td></tr>"
		res += "<tr><td>Meteo</td><td>" + donneesMeteo.weather[0].description + '<img src="http://openweathermap.org/img/w/'+ donneesMeteo.weather[0].icon  + '.png' +'" />' +"</td></tr>"
		res += "<tr><td>Temperature</td><td>" + donneesMeteo.main.temp + "</td></tr>"
		res += "<tr><td>Pression</td><td>" + donneesMeteo.main.pressure + "</td></tr>"
		res += "<tr><td>Humidité</td><td>" + donneesMeteo.main.humidity + "</td></tr>"
		res += "<tr><td>Vitesse du vent</td><td>" + donneesMeteo.wind.speed + "</td></tr>"

		document.getElementById(id).innerHTML += res
	})
    .catch( (error) => console.log(error))
}
 /*
 function villes() {
	let ville = document.getElementById("ville").value
	console.log(ville)
	
    fetch(urlNominatim + ville, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
        console.log(dataJSON)
        let villes = dataJSON;
        let txtHtml = "";
        for (let v of villes) {
			if (v.address.city == ville) {
				// recup de la bounding box
				bdgBox = v.boundingbox;
				// txtHtml = txtHtml + "<p>"+"bas: "+bdgBox[0]+" haut: "+bdgBox[1]+" gauche: "+bdgBox[2]+" droit: "+bdgBox[3]+"</p>";
				txtHtml = '<div id="' + v.place_id + '" style="clear:both"><h2>' + v.display_name + '</h2>' ;
				txtHtml += '<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://www.openstreetmap.org/export/embed.html?bbox='+ bdgBox[2] + '%2C' + bdgBox[0] + '%2C' + bdgBox[3] + '%2C' + bdgBox[1] +'&amp;layer=mapnik" style="border: 1px solid black"></iframe>';
				txtHtml +=  '</div>';
				document.getElementById("resultat").innerHTML += txtHtml;
				//meteo(v.place_id, v.lat, v.lon);
			}
			
		}
    })
    .catch( (error) => console.log(error))

}

// ========== Meteo ======
function meteo(id, lat, lon) {

	let urlMeteo = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon +"&units=metric&lang=fr&format=json&appid=1f49990935a083d943c8264835d568f3";
	fetch(urlMeteo, fetchOptions)
    .then( (response) => {
        return response.json()
    })
    .then( (dataJSON) => {
		let donneesMeteo = dataJSON
		let res = "<table>"
		res += "<tr><td>Ville</td><td>" + donneesMeteo.name + "</td></tr>"
		res += "<tr><td>Meteo</td><td>" + donneesMeteo.weather[0].description + '<img src="http://openweathermap.org/img/w/'+ donneesMeteo.weather[0].icon  + '.png' +'" />' +"</td></tr>"
		res += "<tr><td>Temperature</td><td>" + donneesMeteo.main.temp + "</td></tr>"
		res += "<tr><td>Pression</td><td>" + donneesMeteo.main.pressure + "</td></tr>"
		res += "<tr><td>Humidité</td><td>" + donneesMeteo.main.humidity + "</td></tr>"
		res += "<tr><td>Vitesse du vent</td><td>" + donneesMeteo.wind.speed + "</td></tr>"

		document.getElementById(id).innerHTML += res
	})
    .catch( (error) => console.log(error))
}
*/