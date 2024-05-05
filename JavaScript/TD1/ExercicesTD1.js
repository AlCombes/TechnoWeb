// ================================================================================================
// Exercice 1 : Écrire une fonction qui permette de connaître la catégorie d’âge d’un enfant :
// - Poussin : de 6 à 7 ans
// - Pupille : de 8 à 9 ans
// - Minime : de 10 à 11 ans
// - Cadet : après 12 ans

let childAge = 10;
let tChildCat = ["Poussin", "Pupille", "Minime", "Cadet", "ND"];

function childAge2ChildCat(age) {
  let categorie;
  if (age >= 6 && age <= 7) {
    categorie = tChildCat[0];
  } else if (age >= 8 && age <= 9) {
    categorie = tChildCat[1];
  } else if (age >= 10 && age <= 11) {
    categorie = tChildCat[2];
  } else if (age >= 12) {
    categorie = tChildCat[3];
  } else {
    categorie = ND;
  }
  return categorie;
}

let testCat = childAge2ChildCat(8);
console.log(testCat);
testCat = childAge2ChildCat(12);
console.log(testCat);
testCat = childAge2ChildCat(6);
console.log(testCat);
testCat = childAge2ChildCat(11);
console.log(testCat);

// ================================================================================================
// Exercice 2 : écrire un script qui crée un tableau de NB (20 par exemple) cases et le remplit
// avec des valeurs aléatoires comprises entre 0 et une BORNE_MAX (100 par exemple).
// Pour information :
// Math.random() : Retourne un nombre pseudo‐aléatoire compris entre 0 (inclus) et 1 (exclu).
// Math.round(x) : Calcule l’arrondi du nombre n : n=3,4  arrondi = 3 n=3,6  arrondi = 4

function createTable(size, MAX_VALUE) {
  let table = [];
  for (let index = 0; index < size; index++) {
    table[index] = Math.round(Math.random() * (MAX_VALUE + 1));
  }
  return table;
}

let computedArray = createTable(20, 200);
console.log(computedArray);

// ================================================================================================
// Exercice 3 : écrire une fonction nommée identique qui retourne vrai si deux
// cases (dont on connait les indices) d’un tableau sont identiques

function identique(table, index1, index2) {
  return table[index1] == table[index2];
}

let tableToTest = ["toto", "tati", "toto", "tata"];
console.log(identique(tableToTest, 0, 1));
console.log(identique(tableToTest, 0, 2));

// ================================================================================================
// Exercice 4 : écrire une fonction nommée presente qui retourne vrai si la valeur de la dernière
// case du tableau est identique à une valeur d’une case du début du tableau. Cette fonction devra
// utiliser la fonction identique.

function presente(table) {
  if (table.length < 2) {
    return false;
  } else {
    for (let index = 0; index < table.length - 1; index++) {
      if (identique(table, index, table.length - 1)) return true;
    }
    return false;
  }
}

tableToTest = ["toto", "tati", "toto", "tata"];
console.log(presente(tableToTest));
tableToTest = ["toto", "tata", "toto", "tata"];
console.log(presente(tableToTest));
tableToTest = ["toto"];
console.log(presente(tableToTest));
tableToTest = ["toto", "toto"];
console.log(presente(tableToTest));

// ================================================================================================
// Exercice 5 : reprendre le script de l’exercice 1 pour en faire une fonction initTableauHasard
// qui initialise les NB cases d’un tableau avec des nombres aléatoires compris entre 0 et
// BORNE_MAX mais en vérifiant en plus qu’il n’y ait jamais deux valeurs identiques dans le
// tableau. Cette fonction devra utiliser la fonction presente.

function initTableauHasard(size, MAX_VALUE) {
  let table = [];
  for (let index = 0; index < size; index++) {
    table[index] = Math.round(Math.random() * (MAX_VALUE + 1));
    if (presente(table)) index--;
  }
  return table;
}

computedArray = initTableauHasard(20, 200);
console.log(computedArray);

// ================================================================================================
// exo 7.a - afficher dans la console le premier fils du nœud ayant p2 comme identifiant
console.log(document.getElementById("p2").firstElementChild); // object Tex
document.getElementById("p2").childNodes[0]; // version AC

// ================================================================================================
// exo 7.b - afficher dans la console le texte de toutes les balises <a>
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

// ================================================================================================
// exo 7.c - insérer le texte « ici la date » dans la balise ayant today comme identifiant.
document.getElementById("today").textContent = "ici la date";

// ================================================================================================
// exo 7.d - changer le texte « puis » par « et ».
//document.getElementById("p22").textContent = " et ";  // pb = écrase l’ancre
//document.getElementById("p22").innerHTML=" et ";  // pb = écrase l’ancre
// aller sur le nœud de type texte
document.getElementById("p22").firstChild.textContent = " et ";
document.getElementById("p22").childNodes[0].textContent = "et "; // version AC

// ================================================================================================
// exo 7.e - Ajouter un quatrième paragraphe après le paragraphe d’id 23.
// <p class="paragraphe4" id='p24'>et encore <a href="#">lien4</a> fin</p>
let elt = document.createElement("p"); // l'élément
elt.id = "p24"; // l'attribut id
elt.class = "paragraphe4"; // la classe
elt.innerHTML = 'et encore <a href="#">lien4</a> fin'; // le texte HTML du paragraphe
document.getElementById("p2").appendChild(elt);

// ================================================================================================
// exo7.f : comment ajouter le 4ème paragraphe avant le 1er paragraphe ?
//  document.getElementById("p2").insertBefore(elt,document.getElementById("p2").firstChild);

// ================================================================================================
// exo7.g : supprimer le paragraphe d'id p22
let p = document.getElementById("p22");
document.getElementById("p2").removeChild(p);

// ================================================================================================
// exo7.h : le titre en gras bleu
let titres = document.getElementsByTagName("h1");
titres[0].style.color = "blue";
titres[0].style.fontWeight = "bold";

// ================================================================================================
// exo7.i : fonction qui retourne une chaine de caractères qui contient les textes d'un paragraphe
// role : extraire tous les textes d'un noeud
// données : un noeud (donc de type Node)
// résultats : une chaine de caractères

// version 1
function texteParagraphe(noeud) {
  let resultat = "";
  let fils = noeud.childNodes;
  for (let i = 0; i < fils.length; i++) {
    if (fils[i].nodeType == 3) {
      resultat = resultat + fils[i].textContent;
    }
  }
  return resultat;
}
/*
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
*/
console.log(texteParagraphe(document.getElementById("p22")));
