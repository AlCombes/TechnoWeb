<script setup>
import { reactive } from "vue";
import { ref, watch } from "vue";
import { onMounted, onUpdated } from "vue";
import Film from "../Film";
// State du component
const listeFilms = reactive([]);
// Props :
let props = defineProps(["pcritere"]);

// Informations for API
const apiKey = "4a785d4bb793e447d206bdf62fb027f0";
const url =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  apiKey +
  "&language=fr-FR&page=1&query=";

function searchFilms() {
  const fetchOptions = { method: "GET" };
  fetch(url + props.pcritere, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      listeFilms.splice(0, listeFilms.length);
      for (let filmInfo of dataJSON.results) {
        let newfilm = new Film(filmInfo);
        listeFilms.push(newfilm);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

function showFilmListInHtmlListFormat() {}

onMounted(() => {
  searchFilms();
});

watch(props, (newcritere) => {
  console.log(newcritere);
  searchFilms();
});
</script>

<template>
  <h3>Liste des films</h3>
  <!-- <ul>
    <li v-for="(film, index) in listeFilms" :key="[film.id]">
      <span v-if="film.affiche != ''">
        <img
          class="image"
          :src="'https://image.tmdb.org/t/p/w500/' + film.affiche"
        />
      </span>
      <span v-else>(Pas d'image)</span>
      <br />
      Titre : {{ film.titre }}
    </li>
  </ul> -->

  <v-row dense>
    <v-col
      v-for="film in listeFilms"
      :key="film.id"
      cols="12"
      sm="6"
      md="3"
      lg="2"
      xl="2"
    >
      <router-link :to="'/PageDetail/' + film.id">
        <v-card color="primary">
          <span v-if="film.affiche != ''">
            <v-img
              :src="'https://image.tmdb.org/t/p/w500/' + film.affiche"
              height="200px"
              cover
            ></v-img>
          </span>
          <v-card-title>
            {{ film.titre }}
          </v-card-title>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<style scoped>
.image {
  width: 200px;
  height: 300px;
}
</style>
