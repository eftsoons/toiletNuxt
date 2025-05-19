<template>
  <img class="imgtype2" :src="currentImage" @click="setphoto" />
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentImage: "",
      currentIndex: 0,
    };
  },
  created() {
    this.currentImage = this.images[this.currentIndex];
  },
  methods: {
    setphoto() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    },
  },
};
</script>
<style>
.imgtype2 {
  width: 100%;
  height: 208px;
  border-radius: 10px;
  object-fit: cover;
}
</style>
