console.log("bonjour");

let output;
let elt;
let eltToAdd;
// ================================================================================================
// afficher dans la console l’élément dont l’identifiant est 'c1'
{
output = document.getElementById("c1");
console.log(output);
}
// ================================================================================================
// afficher dans la console le premier élément de classe "carte"
{
output = document.getElementsByClassName("carte")[0];
console.log(output);
}
// ================================================================================================
// afficher dans la console tous les éléments de classe "carte"
{
output = document.getElementsByClassName("carte");
console.log(output);
}
// ================================================================================================
// afficher tous les paragraphes HTML (élément p)
{
output = document.getElementsByTagName("p");
console.log(output);
}
// ================================================================================================
// afficher le nom de la classe de l'élément d'id j1
{
output = document.getElementsByTagName(document.getElementById("j1").className);
console.log(output);
}
// ================================================================================================
// afficher l'id du dernier élément fils de l'élément d'id p2
{
output = document.getElementById("j1").lastElementChild;
console.log(output);
}
// ================================================================================================
// Modifier le contenu de l’élément d’identifiant 'titre' pour y mettre le texte "TP1 manipulation
// du DOM".
{
document.getElementById("titre").textContent = "TP2 manipulation du DOM";
}
// ================================================================================================
// Mettre l’élément d’identifiant c1 en rouge (‘red’) et mettre l’élément d’identifiant c2 en vert
// (‘green’)
{
elt = document.getElementById("c1");
console.log(elt);
document.getElementById("c1").style.background = "red";
document.getElementById("c2").style.background = "green";
}
// ================================================================================================
// Ajouter une 3ème carte de couleur bleue, d’id c3 et d’ancre 3
{
eltToAdd = document.createElement("p");
eltToAdd.className = elt.className;
eltToAdd.id = "c3";
eltToAdd.innerHTML = "<a> 3 </a>";
eltToAdd.style.background = "blue";

elt = document.getElementById("j1");
elt.appendChild(eltToAdd);
}
// ================================================================================================
// Ecrire la fonction « ajouterCarte » qui ajoute une nouvelle carte connaissant son numéro (4, 5,
// 6, …) comme fils de l’élément d’id j1. Toutes les cartes auront les mêmes propriétés (celles de
// la question ci‐dessus) sauf l’id et l’ancre.
// Par exemple pour la carte de numéro 6 : <p class="carte" id="c6"><a> 6 </a></p>
// Tester la fonction : ajouterCarte(4) ajouterCarte(5)
{
function ajouterCarte(numero) {
  elt = document.getElementById("c1");
  eltToAdd = document.createElement("p");
  eltToAdd.className = elt.className;
  eltToAdd.id = "c" + numero;
  eltToAdd.innerHTML = "<a> " + numero + "</a>";
  eltToAdd.style.background = couleurAleatoire();
  elt = document.getElementById("j1");
  elt.appendChild(eltToAdd);
}

ajouterCarte(4);
ajouterCarte(5);

function couleurAleatoire() {
  let tCouleurs = ["blue", "red", "purple", "yellow", "green"];
  let randomIndex = Math.floor(Math.random() * tCouleurs.length);
  let color = tCouleurs[randomIndex];
  console.log(color);
  return color;
}
}
// ================================================================================================
// Ecrire une boucle qui ajoute les cartes 6 à 10 en utilisant la fonction précédente
{
for (let index = 6; index <= 10; index++) {
  ajouterCarte(index);
}
}
// ================================================================================================
// Ecrire la fonction « supprimerCarte » qui supprime une carte dont on connait le numéro.
// Exemple : supprimerCarte(5)
{
function supprimerCarte(numero) {
  elt = document.getElementById("c" + numero);
  document.getElementById("j1").removeChild(elt);
  return elt;
}

supprimerCarte(5);
}
// ================================================================================================
// Déplacer une carte : Ecrire la fonction « deplacerCarte » qui déplace la première carte en
// dernier.
// Exemple : deplacerCarte()
{
function deplacerCarte() {
  elt = document.getElementById("j1").firstElementChild;
  document.getElementById("j1").appendChild(elt);
}
}
// ================================================================================================
// Défilement des cartes : utiliser la fonction javascript setInterval pour faire défiler
// automatiquement toutes les cartes au rythme d’une carte toutes les 2 secondes. Utiliser pour
// cela la fonction précédente deplacerCarte.
{
setInterval(deplacerCarte, 2000);
}
// ================================================================================================
// Retourner une carte : écrire une fonction permettant de retourner une carte (la carte apparait
// alors avec un fond blanc sur lequel est écrit le numéro)
//     Exemple : retournerCarte(2) ; retournerCarte(7)
{
function retournerCarte(numero) {
  elt = document.getElementById("c" + numero);
  elt.style.backgroundColor = "white";
  elt.textContent = numero;
  elt.style.alignContent = "center";
  elt.style.textAlign = "center";
}

retournerCarte(2);
retournerCarte(7);
}
// ================================================================================================
// Ecrire une fonction permettant de zoomer une carte (la carte doit voir sa taille x 2)
{
function zoomerCarte(numero) {
  elt = document.getElementById("c" + numero);
  console.log(elt);
  elt.style.width = "160px";
  elt.style.height = "160px";
}

zoomerCarte(3);
zoomerCarte(8);
}