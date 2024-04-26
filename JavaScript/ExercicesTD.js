// Exercice 1 : Écrire une fonction qui permette de connaître la catégorie d’âge d’un enfant :
// - Poussin : de 6 à 7 ans
// - Pupille : de 8 à 9 ans
// - Minime : de 10 à 11 ans
// - Cadet : après 12 ans
let childAge = 10;
let tChildCat = [Poussin, Pupille, Minime, Cadet, ND];

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

// Exercice 2 : écrire un script qui crée un tableau de NB (20 par exemple) cases et le remplit avec des valeurs
// aléatoires comprises entre 0 et une BORNE_MAX (100 par exemple).
// Pour information :
// Math.random() : Retourne un nombre pseudo‐aléatoire compris entre 0 (inclus) et 1 (exclu).
// Math.round(x) : Calcule l’arrondi du nombre n : n=3,4  arrondi = 3 n=3,6  arrondi = 4


// Exercice 3 : écrire une fonction nommée identique qui retourne vrai si deux cases (dont on connait les
// indices) d’un tableau sont identiques


// Exercice 4 : écrire une fonction nommée presente qui retourne vrai si la valeur de la dernière case du
// tableau est identique à une valeur d’une case du début du tableau. Cette fonction devra utiliser la fonction
// identique.


// Exercice 5 : reprendre le script de l’exercice 1 pour en faire une fonction initTableauHasard qui initialise les
// NB cases d’un tableau avec des nombres aléatoires compris entre 0 et BORNE_MAX mais en vérifiant en
// plus qu’il n’y ait jamais deux valeurs identiques dans le tableau. Cette fonction devra utiliser la fonction
// presente.