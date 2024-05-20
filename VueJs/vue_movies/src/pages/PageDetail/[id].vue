<script setup>
import FilmDetail from "@/components/FilmDetail.vue";
// useRoute permet de récupérer la route
import { useRoute } from "vue-router";
const route = useRoute();
// et donc de récupérer l'id du film "cliqué"
const id = route.params.id;
console.log(id);
</script>

<template>
  <FilmDetail :idFilm="id"></FilmDetail>
</template>
