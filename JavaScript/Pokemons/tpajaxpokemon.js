const url = "https://pokeapi.co/api/v2/pokemon/";

getPokemons();

/**
 * ajoute dans le DOM la liste des pokemons
 */
function getPokemons() {
  let fetchOptions = { method: "GET" };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      //   console.log(dataJSON);
      //   console.log(JSON.parse(JSON.stringify(dataJSON)));
      let pokemons = dataJSON.results;

      // Sort version AC :
      pokemons.sort(comparePokemons);

      // Sort version JMP :
      //   let pokes = dataJSON.results.sort((p1, p2) =>
      //     p1.name < p2.name ? -1 : 1
      //   );

      let texteHTML = "";
      for (let p of pokes) {
        texteHTML =
          texteHTML + '<option value="' + p.url + '">' + p.name + "</option>";
      }
      document.getElementById("liste").innerHTML = texteHTML;
    });
}

function comparePokemons(pokemonA, pokemonB) {
  return pokemonA.name.localeCompare(pokemonB.name);
}

document.getElementById("liste").addEventListener("change", getPokemon);

/**
 * ajoute dans le DOM les infos sur un pokemon
 * @param event permet de connaître l'url du pokemon
 */
function getPokemon(event) {
  const url = event.target.value;
  const fetchOptions = { method: "GET" };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      const poke = dataJSON;
      const image = poke.sprites.front_default;
      let texteHTML = `Le pokemon ${poke.name} mesure ${
        poke.height * 10
      } cm et pèse ${poke.weight / 10} kg <br><img src="${image}"/>`;

      document.getElementById("detail").innerHTML = texteHTML;
    });
}
