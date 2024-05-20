<script setup>
import FilmAfficheList from "./FilmAfficheList.vue";
import { ref } from "vue";
import FormText from "./FormText.vue";
let motcle = ref("");

function updateKeyWordHandler(keyword) {
  console.log("Update KW = " + keyword);
  motcle.value = keyword;
}
</script>

<template>
  <FormText @changeKeyword="updateKeyWordHandler" />
  <FilmAfficheList :pcritere="motcle"></FilmAfficheList>
</template>
