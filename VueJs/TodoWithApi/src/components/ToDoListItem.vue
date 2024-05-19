<script setup>
defineProps(["chose", "indexInTable"]);
</script>
<template>
  <li>
    {{ console.log(chose) }}
    {{ chose.pourAfficher() }}
    {{ console.log(indexInTable) }}
    <button @click="$emit('eventFaire', indexInTable)">
      <span v-if="chose.fait">Défaire</span>
      <span v-else>Faire</span>
    </button>
    <button @click="$emit('eventDefaire', indexInTable)">Supprimer</button>
  </li>
</template>
<style></style>
