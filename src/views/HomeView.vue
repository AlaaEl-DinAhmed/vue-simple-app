<script lang="ts">
import ProductCard, { type IProduct } from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [] as IProduct[],
    };
  },
  methods: {
    async getProducts() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data: IProduct[]) => (this.products = data));
    },
    addToCart(id: number) {
      // add to cart implementation
    },
  },
  created() {
    this.getProducts();
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
