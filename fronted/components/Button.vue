<template>
  <button class="button" :style="styles"><slot></slot></button>
</template>

<script>
export default {
  props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
button {
  background-color: rgba(105, 190, 151, 1);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: rgba(255, 255, 255, 1);
  font-family: VK Sans Display;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
