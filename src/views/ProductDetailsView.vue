<script setup lang="ts">
import ProductDetails from "@/components/ProductDetails.vue";
import { useProductsStore } from "@/stores/products";
import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const store = useProductsStore();

const addToCart = (id: number) => {
  // add to cart implementation
};
onMounted(() => {
  store.getSingleProduct(+route.params.id);
});

onUnmounted(() => store.$reset());
</script>

<template>
  <ProductDetails :product="store.singleProduct" @add-to-cart="addToCart" />
</template>
