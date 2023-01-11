<template>
  <button class="btn">
    {{ text }}
    <slot name="icon"></slot>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
