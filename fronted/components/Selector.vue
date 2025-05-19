<template>
  <div class="selector">
    <button
      v-for="(item, index) in data"
      :key="index"
      @click="select(index + 1)"
      :class="{ activebutton: index + 1 == activeselector }"
    >
      {{ item }}
    </button>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, required: true },
    activeselector: { type: Number, required: true },
    setactive: { type: Function, required: true },
  },
  methods: {
    select(index) {
      if (this.activeselector == index) {
        this.setactive(0);
      } else {
        this.setactive(index);
      }
    },
  },
};
</script>
<style scoped>
.selector {
  display: flex;
  justify-content: space-evenly;
  width: 90%;
}

button {
  background: #fbf6f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  font-family: "VK Sans Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #655d56;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 130px;
  height: 36px;
}

.activebutton {
  border: green solid 1px;
}
</style>
