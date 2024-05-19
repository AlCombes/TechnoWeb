<script setup>
import { reactive } from "vue";
import { Chose } from "../Chose";
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoForm.vue";
import { onMounted, onUpdated } from "vue";
const listeC = reactive([]);
const usrId = 19811;
//const usrId = 1;

function handlerFaire(index) {
  const chose = listeC[index];
  console.log(chose);
  // Requête PUT API
  fetch(
    "https://webmmi.iut-tlse3.fr/~pecatte/todos/public/" + usrId + "/todos",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: chose.id,
        libelle: chose.texte,
        fait: !chose.fait,
      }),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.status == 1) {
        getTodos();
      } else {
        alert("Erreur lors de la modification");
      }
    })
    .catch((error) => console.error("Erreur : " + error));
}

function handlerDelete(index) {
  listeC.splice(index, 1);
}
function handlerAdd(libelle) {
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/todos/public/" + usrId + "/todos"; // l’url de la ressource
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({ libelle: libelle }),
  };

  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      console.log(dataJSON);
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
  getTodos();
}

function getTodos() {
  const url =
    "https://webmmi.iut-tlse3.fr/~pecatte/todos/public/" + usrId + "/todos"; // l’url de la ressource
  console.log("url =" + url);
  let fetchOptions = { method: "GET" }; // les options de l'API fetch
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      // dataJSON = les données renvoyées
      console.log(dataJSON);
      listeC.splice(0, listeC.length);
      for (let task of dataJSON) {
        console.log(task.id);
        let p = new Chose(task.id, task.libelle, task.fait);
        listeC.push(p);
      }
    })
    .catch((error) => {
      // gestion des erreurs
      console.log(error);
    });
}

onMounted(() => {
  getTodos();
});
</script>

<template>
  <ToDoForm @addC="handlerAdd"></ToDoForm>
  <h3>Liste des choses à faire</h3>
  <ul>
    <li v-for="(chose, index) in listeC" :key="[chose.id]">
      <ToDoListItem
        :chose="chose"
        :indexInTable="index"
        @eventFaire="handlerFaire"
        @eventDefaire="handlerDelete"
      ></ToDoListItem>
    </li>
  </ul>
</template>
