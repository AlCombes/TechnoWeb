<script setup>
const props = defineProps(["idFilm"]);
import { reactive } from "vue";
import { onMounted, onUpdated } from "vue";
import Film from "@/Film";
// Clé API
const apiKey = "4a785d4bb793e447d206bdf62fb027f0";
let data = reactive({ film: null });

const url =
  "https://api.themoviedb.org/3/movie/" +
  props.idFilm +
  "?api_key=" +
  apiKey +
  "&language=fr-FR";

function searchFilmDetails() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      data.film = new Film(dataJSON);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

onMounted(() => {
  searchFilmDetails();
});
</script>

<template>
  <h3>Detail d'un film {{ idFilm }}</h3>
</template>
