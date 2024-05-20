<script setup>
import { ref } from "vue";
const keyword = ref("");
</script>

<template>
  <!-- <h1>Recherche de films</h1> -->
  <form @submit.prevent="$emit('changeKeyword', keyword)">
    <input type="text" v-model="keyword" placeholder="Filtre film ?" />
    <input type="submit" value="Rechercher" />
  </form>
</template>
