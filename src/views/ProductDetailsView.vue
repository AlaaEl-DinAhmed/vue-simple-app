<script setup lang="ts">
import ProductDetails from "@/components/ProductDetails.vue";
import { useSingleProduct } from "@/hooks/useProductDetails";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const { product, getSingleProduct } = useSingleProduct();

const addToCart = (id: number) => {
  console.log(id);
  // add to cart implementation
};
onMounted(() => {
  getSingleProduct(+route.params.id);
});
</script>

<template>
  <ProductDetails :product="product" @add-to-cart="addToCart" />
</template>
