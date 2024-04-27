// Exercice 7

// exo 7.a
console.log(document.getElementById("p2").firstChild);
document.getElementById("p2").childNodes[0]; // version AC

// exo 7.b
let noeuds = document.getElementsByTagName("a");
console.log(noeuds);
// v1 boucle for i
for (let i = 0; i < noeuds.length; i++) {
  console.log(noeuds[i].textContent);
}
// v2 boucle for of
for (let n of noeuds) {
  console.log(n.textContent);
}

// exo 7.c
document.getElementById("today").textContent = "ici la date";
// exo 7.d
//document.getElementById("p22").textContent = " et ";  // pb = écrase l’ancre
//document.getElementById("p22").innerHTML=" et ";  // pb = écrase l’ancre

// aller sur le nœud de type texte
document.getElementById("p22").firstChild.textContent = " et ";
document.getElementById("p22").childNodes[0].textContent = "et "; // version AC

// exo 7.e : <p class="paragraphe4" id='p24'>et encore <a href="#">lien4</a> fin</p>
let elt = document.createElement("p"); // l'élément
elt.id = "p24"; // l'attribut id
elt.class = "paragraphe4"; // la classe
elt.innerHTML = 'et encore <a href="#">lien4</a> fin'; // le texte HTML du paragraphe
document.getElementById("p2").appendChild(elt);
// exo7.f :
//  document.getElementById("p2").insertBefore(elt,document.getElementById("p2").firstChild);

// exo7.g : supprimer le paragraphe d'id p22
let p = document.getElementById("p22");
document.getElementById("p2").removeChild(p);

// exo2.h : le titre en gras bleu
let titres = document.getElementsByTagName("h1");
titres[0].style.color = "blue";
titres[0].style.fontWeight = "bold";

/*	// exo2.i : fonction qui retourne une chaine de caractères qui contient les textes d'un paragraphe
// role : extraire tous les textes d'un noeud
// données : un noeud (donc de type Node)
// résultats : une chaine de caractères

// version 1
function texteParagraphe(noeud) {
  let resultat = "";
  let fils = noeud.childNodes;
  for (let i=0; i < fils.length ; i++) {
    if (fils[i].nodeType == 3) {
      resultat = resultat + fils[i].textContent;
    }
  }
  return resultat;
}
// version 2
function texteParagraphe(noeud) {
  let resultat = "";
  noeud.childNodes.forEach(function(val) {
    if (val.nodeType == 3) {
      resultat += val.textContent;
    }
  });
  return resultat;
}
console.log( texteParagraphe(document.getElementById("p22")));
*/
