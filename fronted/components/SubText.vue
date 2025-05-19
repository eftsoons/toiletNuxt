<template>
  <div @click="show">
    <h5><slot></slot> +</h5>
    <transition>
      <p v-if="showtext">{{ text }}</p>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return { showtext: false };
  },
  props: {
    text: { type: String, required: true },
  },
  methods: {
    show() {
      this.showtext = !this.showtext;
    },
  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  p {
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: #fbf6f1;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
