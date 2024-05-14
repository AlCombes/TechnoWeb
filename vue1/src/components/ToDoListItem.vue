<script setup>
defineProps(["chose", "indexChose"]);
</script>
<template>
  <li>
    <span v-if="chose.fait">
      <s> {{ chose.pourAfficher() }} </s></span
    >
    <span v-else> {{ chose.pourAfficher() }} </span>
    <!-- , Index = {{ indexChose }} -->
    <button @click="$emit('eventDeleteItem', indexChose)">Delete</button>
    <button @click="$emit('eventFaireItem', indexChose)">
      <span v-if="chose.fait"> Défaire </span>
      <span v-else> Faire </span>
    </button>
  </li>
</template>
<style></style>
