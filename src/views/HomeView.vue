<script lang="ts">
import { useProductsStore } from "@/stores/products";
import { mapActions, mapState } from "pinia";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  methods: {
    addToCart(id: number) {
      // add to cart implementation
    },
    ...mapActions(useProductsStore, ["getProducts"]),
  },
  created() {
    this.getProducts();
  },

  computed: {
    ...mapState(useProductsStore, ["products"]),
  },
};
</script>

<template>
  <main class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
      class="border-2 border-gray-200 border-solid"
    />
  </main>
</template>

<style scoped></style>
