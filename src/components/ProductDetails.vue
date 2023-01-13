<template>
  <section class="flex">
    <div class="w-1/3">
      <img :src="product?.image" :alt="product?.title" />
    </div>
    <div class="w-2/3 ml-9">
      <h1 class="text-3xl">{{ product?.title }}</h1>
      <p class="mt-3 mb-3">{{ "$" + product?.price }}</p>
      <p class="mt-3 mb-3">{{ product?.description }}</p>
      <BaseButton text="add to cart" @click="emit('addToCart', product?.id)" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import BaseButton from "./BaseButton.vue";
import type { IProduct } from "./ProductCard.vue";

defineProps({
  product: {
    type: Object as PropType<IProduct>,
    required: true,
  },
});
const emit = defineEmits<{
  (e: "addToCart", id: number): void;
}>();
</script>

<style scoped></style>
