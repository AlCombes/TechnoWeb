// =====================================================================
// Exercice : formulaire de conversion
// On se propose de réaliser l’outil de conversion suivant ; pour un 
// prix saisi, l’utilisateur peut choisir de le convertir en francs ou 
// en euros.

let btn_versFrancs = document.getElementById("versfrancs");
let btn_versEuros = document.getElementById("verseuros");
let txt_valeur = document.getElementById("valeur").value;
let txt_resultat = document.getElementById("resultat");

function convert(valueToConvert, currencyConversion) {
  switch (currencyConversion) {
    case "francs2eur":
      return (valueToConvert * 12 / 1.83);
      break;

    case "eur2francs":
      return (valueToConvert * 1.83 / 12);
      break;

    default:
      return "NaN";
      break;
  }
}

function writeResInEur(event) {
  console.log(txt_valeur);
  console.log(convert(txt_valeur, "francs2eur"));
  txt_resultat.value = convert(txt_valeur, "francs2eur");
}

function writeResInFrancs(event) {
  txt_resultat.value = convert(txt_valeur, "eur2francs");
}

btn_versEuros.addEventListener('click', writeResInEur);
btn_versFrancs.addEventListener('click', writeResInFrancs);


// =====================================================================
// Exercice : vérification saisie
// L’objectif est d’afficher un message d’information au fur et à mesure 
// de la saisie d’un mot de passe :

let textBoxPwd = document.getElementById("passwd");
let txt_securityLevel = document.getElementById("msgPasswd");

function showSafetyLevel(event) {
  let passwordLength = event.target.value.length;
  console.log(passwordLength);
  if (passwordLength <= 3) {
    txt_securityLevel.innerText = "longueur faible";
    txt_securityLevel.style.color = 'red';
  } else if (passwordLength >= 4 && passwordLength < 8) {
    txt_securityLevel.innerText = "longueur moyenne";
    txt_securityLevel.style.color = 'orange';
  } else {
    txt_securityLevel.innerText = "longueur bonne";
    txt_securityLevel.style.color = 'green';
  }
}

textBoxPwd.addEventListener('input', showSafetyLevel)

// =====================================================================
// Exercice : déplacer un objet

let objectToMove = document.getElementById("c1");

document.addEventListener('keydown', function (event) {
  let kbKey = event.key;
  let offsetLeft = objectToMove.offsetLeft
  let offsetTop = objectToMove.offsetTop
  console.log("Pos Left =" + offsetLeft);
  console.log("Pos Top =" + offsetTop);
  switch (kbKey) {
    case "ArrowDown":
      if (offsetTop + objectToMove.offsetHeight < window.innerHeight) { objectToMove.style.top = (offsetTop + 10) + "px"; }
      break;
    case "ArrowUp":
      if (offsetTop > 0) { objectToMove.style.top = (offsetTop - 10) + "px"; }
      break;
    case "ArrowRight":
      if (offsetLeft + objectToMove.offsetWidth < window.innerWidth) { objectToMove.style.left = (offsetLeft + 10) + "px"; }
      break;
    case "ArrowLeft":
      if (offsetLeft > 0) { objectToMove.style.left = (offsetLeft - 10) + "px"; }
      break;
    default:
      break;
  }
})

document.addEventListener('click', function (event) {
  let posX = event.clientX;
  let posY = event.clientY;
  objectToMove.style.top = posY + "px";
  objectToMove.style.left = posX + "px";
  console.log("posX =" + posX);
})

objectToMove.addEventListener('click', function (event) {
  // objectToMove.style.width = (objectToMove.offsetWidth + 10) + "px";
  // objectToMove.style.height = (objectToMove.offsetHeight + 10) + "px";

  event.target.style.width = (event.target.offsetWidth + 10) + "px";
  event.target.style.height = (event.target.offsetHeight + 10) + "px";

  // this.style.width = (this.offsetWidth + 10) + "px";
  // this.style.height = (this.offsetHeight + 10) + "px";
  event.stopPropagation();
})


document.getElementById("pays").addEventListener('keydown', function (event) {
  let elt = document.getElementById("proposition");
  //event.stopPropagation();
  //event.preventDefault();
  elt.innerHTML = "";
  for (let country of listePays) {
    if (country.includes(elt.value))
      console.log(country);
      elt.innerHTML +=
        "<option value =" +
        country +
        ">" +
        country +
        "</option>";
  };

})

const listePays = ["Afghanistan", "Afrique du Sud", "Albanie", "Algérie", "Allemagne", "Andorre",
  "Angola", "Anguilla", "Antarctique", "Antigua-et-Barbuda", "Antilles néerlandaises", "Arabie saoudite",
  "Argentine", "Arménie", "Aruba", "Australie", "Autriche", "Azerbaïdjan"];