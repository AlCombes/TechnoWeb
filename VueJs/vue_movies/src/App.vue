<template>
  <v-app>
    <!-- une barre de navigation -->
    <v-app-bar color="primary" density="compact">
      <!-- mettre l'icone dans le 'slot prepend' de 'v-app-bar' soit au début à gauche -->
      <template v-slot:prepend>
        <!-- un clic sur l'icone cache/affiche la zone de menu de gauche -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <!-- le titre de la barre de navigation -->
      <v-app-bar-title>Application recherche films</v-app-bar-title>
      <!-- un simple bouton qui retourne à la page d'accueil route="/"-->
      <v-btn to="/">Home</v-btn>
      <!-- un bouton avec un menu -->
      <v-btn id="menu-recherche">Rechercher ...</v-btn>
      <!-- le menu s'affichera qd l'élément
d'id 'menu-recherche' ici 'v-btn' sera activé-->
      <v-menu activator="#menu-recherche">
        <v-list>
          <v-list-item to="/PageFilms">
            <!-- navigation vers la page "films" -->
            <v-list-item-title>Films</v-list-item-title>
          </v-list-item>
          <v-list-item to="/PageActeurs">
            <!-- navigation vers la page "acteurs" -->
            <v-list-item-title>Acteurs</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- un vers la page "about" -->
      <v-btn to="/PageAbout">About</v-btn>
      <!-- mettre l'icone dans le 'slot append' de 'v-app-bar' soit au fond à droite -->
      <template v-slot:append>
        <v-btn id="menu-droite" icon="mdi-dots-vertical"></v-btn>
        <!-- le menu s'affichera qd l'élément d'id 'menu-droite' ici 'v-btn' sera activé-->
        <v-menu activator="#menu-droite">
          <v-list>
            <v-list-item to="/PageChoix1">
              <!-- navigation vers la page "choix1" -->
              <v-list-item-title>Choix1</v-list-item-title>
            </v-list-item>
            <v-list-item to="/PageChoix2">
              <!-- navigation vers la page "choixé" -->
              <v-list-item-title>Choix2</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <!-- zone de menu de gauche caché / visible en fonction du booléen 'drawer'-->
    <v-navigation-drawer app v-model="drawer" color="primary">
      <v-list-item>
        <v-list-item-title class="text-h6"> Movies</v-list-item-title>
        <v-list-item-subtitle> Menu gauche</v-list-item-subtitle>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item to="/PageItem1">
          <!-- navigation vers la page "item1" -->
          <v-list-item-title>Item 1</v-list-item-title>
        </v-list-item>
        <v-list-item to="/PageItem2">
          <!-- navigation vers la page "item2" -->
          <v-list-item-title>Item 2</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- la zone où sera affichée les différentes "pages"-->
    <v-main>
      <v-container class="page">
        <!-- les "composant view" s'afficheront ici -->
        <RouterView />
      </v-container>
    </v-main>
    <!-- le footer -->
    <v-footer color="primary">
      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-footer>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
const drawer = ref(false); // booléen pour afficher/cacher la zone de gauche
</script>
<style scoped>
.page {
  min-height: 100vh;
  text-align: center;
}
</style>
