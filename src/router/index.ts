import HomeViewVue from "@/views/HomeView.vue";
import ProductDetails from "@/views/ProductDetailsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      component: HomeViewVue,
    },
    {
      path: "/product/:id",
      name: "productDetails",
      component: ProductDetails,
    },
  ],
});

export default router;
