<template>
  <section class="max-w-xs text-center">
    <img class="w-[40%] mx-auto" :src="product.image" :alt="product.title" />
    <h2 class="text-lg mt-3">{{ product.title }}</h2>
    <p class="mt-3 mb-3">{{ "$" + product.price }}</p>
    <p class="mb-5">{{ product.description }}</p>
    <button
      class="bg-slate-900 text-white pt-3 pb-3 pr-3 pl-3"
      @click="$emit('addToCart', product.id)"
    >
      Add to cart
    </button>
  </section>
</template>

<script lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rate;
}

interface Rate {
  rate: number;
  count: number;
}

import type { PropType } from "vue";

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  emits: {
    addToCart(id: number) {
      return id;
    },
  },
};
</script>
