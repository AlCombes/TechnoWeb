/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter } from "vue-router/auto";
import { createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
});

console.log("Base URL : " + import.meta.env.BASE_URL);

export default router;

// const router = new Router({
//   mode: "history",
// });
// export default router;
