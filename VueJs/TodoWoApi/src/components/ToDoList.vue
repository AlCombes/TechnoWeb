<!-- SCRIPT -->
<script setup>
import { reactive } from "vue";
import Chose from "../Chose";
import { ref } from "vue";
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoForm.vue";

// // // Créer une donnée réactive dans « ToDoList » avec 2 choses à faire :
const listeC = reactive([new Chose("Menage"), new Chose("Vaisselle")]);
const compteur1 = ref(0);
function handlerFaire(index) {
  listeC[index].faire();
}

function handlerDelete(index) {
  listeC.splice(index, 1);
}

function handlerAdd(l) {
  let p = new Chose(l);
  console.log(p.pourAfficher());
  listeC.push(p);
}
</script>

<!-- TEMPLATE -->
<template>
  <h3>Liste des choses à faire</h3>
  <ToDoForm @eventCreateChose="handlerAdd" />
  <!-- Etape 2 et 3 -->
  <!-- <ul id="liste">
    <li v-for="(chose, index) in listeC" :key="[chose.id]">
      {{ chose.pourAfficher() }}
      <button @click="handlerDelete(index)">Delete</button>
      <button @click="handlerFaire(index)">Faire</button>
      <button @click="compteur1++">Compteur 1 : {{ compteur1 }}</button>
    </li>
  </ul> -->

  <ul id="liste">
    <ToDoListItem
      v-for="(chose, index) in listeC"
      :key="[chose.id]"
      :chose="chose"
      :indexChose="index"
      @eventDeleteItem="handlerDelete"
      @eventFaireItem="handlerFaire"
    />
  </ul>

  <!-- <button v-on:click="genial = !genial">Toggle</button>
  <h1 v-if="genial">Vue c'est génial !</h1>
  <h1 v-else>Oh no 😢</h1> -->
</template>
