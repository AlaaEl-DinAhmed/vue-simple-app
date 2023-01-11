<template>
  <section class="p-5 text-center">
    <RouterLink :to="{ name: 'productDetails', params: { id: product.id } }">
      <img
        class="w-[40%] h-[150px] object-contain mx-auto"
        :src="product.image"
        :alt="product.title"
      />
      <h2 class="line-clamp-1 text-lg mt-3">{{ product.title }}</h2>
      <p class="mt-3 mb-3">{{ "$" + product.price }}</p>
      <BaseButton text="add to cart" @click="$emit('addToCart', product.id)" />
    </RouterLink>
  </section>
</template>

<script lang="ts">
export interface IProduct {
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
import BaseButton from "./BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    product: {
      type: Object as PropType<IProduct>,
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
