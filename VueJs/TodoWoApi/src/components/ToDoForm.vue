<script setup>
import { ref } from "vue";
const texteChose = ref("");
</script>
<template>
  <form @submit.prevent="$emit('eventCreateChose', texteChose)">
    <input v-model="texteChose" placeholder="chose ?" />
    <input type="submit" value="valider"></input>
  </form>
</template>
<style></style>
