<script setup>
defineProps(["chose", "indexInTable"]);
</script>
<template>
  <li>
    {{ chose.pourAfficher() }}
    <button @click="$emit('eventFaire', chose)">
      <span v-if="chose.fait">Défaire</span>
      <span v-else>Faire</span>
    </button>
    <button @click="$emit('eventDelete', chose.id)">Supprimer</button>
  </li>
</template>
<style></style>
