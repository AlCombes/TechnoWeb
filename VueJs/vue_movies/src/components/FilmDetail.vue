<template>
  <h3>Detail d'un film {{ idFilm }}</h3>
  <!-- <v-card color="primary" class="mx-auto" max-width="344">

    <v-img
      :src="'https://image.tmdb.org/t/p/w500/' + data.film?.affiche"
      height="500px"
      cover
    ></v-img>
    <v-card-title>
      {{ data.film?.titre }}
    </v-card-title>

    <v-card-subtitle>
      {{ data.film?.genres }}
    </v-card-subtitle>
    <v-card-text class="text-justify">{{ data.film?.resume }}</v-card-text>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="acteur in data.acteurs"
          :key="acteur.id"
          :title="acteur.character"
          :subtitle="acteur.name"
        >
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-text>
      <v-list>
        <v-list-item
          v-for="membre in data.equipe"
          :key="membre.id"
          :title="membre.name"
          :subtitle="membre.job + ' [' + membre.department + ']'"
        >
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="deep-purple-lighten-2"
        variant="text"
        @click="$router.back()"
      >
        Retour
      </v-btn>
    </v-card-actions>
  </v-card> -->
</template>

<script setup>
import { reactive, onMounted } from "vue";
import Film from "../Film";

// -- id du film choisi dans la liste
const props = defineProps(["idFilm"]);

// -- le film
let data = reactive({ film: null, acteurs: null, equipe: null });

// const apiKey = "af1e1c8f8ad6efb5b326eabaffa38b8a";

// function getFilm() {
//   const url =
//     "https://api.themoviedb.org/3/movie/" +
//     props.idFilm +
//     "?api_key=" +
//     apiKey +
//     "&language=fr-FR" +
//     "&region=FR";

//   const fetchOptions = { method: "GET" };

//   fetch(url, fetchOptions)
//     .then((response) => {
//       return response.json();
//     })
//     .then((dataJSON) => {
//       console.log(dataJSON);
//       data.film = new Film(dataJSON);
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// function getActeurs() {
//   const url =
//     "https://api.themoviedb.org/3/movie/" +
//     props.idFilm +
//     "/credits" +
//     "?api_key=" +
//     apiKey +
//     "&language=fr-FR";

//   const fetchOptions = { method: "GET" };

//   fetch(url, fetchOptions)
//     .then((response) => {
//       return response.json();
//     })
//     .then((dataJSON) => {
//       console.log(dataJSON);
//       data.acteurs = dataJSON.cast;
//       data.equipe = dataJSON.crew;

//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// onMounted(() => {
//   getFilm();
//   getActeurs();
// });
</script>
