import HomeViewVue from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeViewVue,
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: () => import("@/views/ProductDetailsView.vue"),
    },
  ],
});

export default router;
