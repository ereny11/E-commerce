<template>
  <slot></slot>
</template>

<script>
export default {
  name: "Wrapper",
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product-container {
  padding: 3rem 0;
}
</style>
