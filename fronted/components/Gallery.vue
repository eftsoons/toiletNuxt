<template>
  <main @click="setdata([])">
    <div class="main" @click="click">
      <Transition>
        <button
          class="bback"
          v-if="indexgallery > 0 && data.length > 1"
          @click="back"
        >
          <
        </button>
      </Transition>
      <div class="gallery" v-for="(item, index) in data" :key="index">
        <Transition>
          <ZoomImg
            v-if="index == indexgallery"
            @click="click"
            :src="item"
            zoom-type="move"
            :zoom-scale="2"
          />
        </Transition>
      </div>
      <Transition>
        <button
          class="bnext"
          v-if="indexgallery < data.length - 1 && data.length > 1"
          @click="next"
        >
          >
        </button>
      </Transition>
    </div>
  </main>
</template>
<script>
import { ZoomImg } from "vue3-zoomer";

export default {
  props: {
    data: { type: Array, required: true },
    setdata: { type: Function, required: true },
  },
  methods: {
    click(e) {
      e.stopPropagation();
    },
    next() {
      if (this.indexgallery < this.data.length - 1) {
        this.indexgallery += 1;
      }
    },
    back() {
      if (this.indexgallery > 0) {
        this.indexgallery -= 1;
      }
    },
  },
  components: { ZoomImg },
  data() {
    return { indexgallery: 0 };
  },
};
</script>
<style scoped>
main {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  width: 100%;
}

.gallery {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
}

.bback,
.bnext {
  color: rgba(251, 246, 241, 1);
  border: none;
  font-size: 2rem;
  position: absolute;
  background: none;
  border: none;
  z-index: 3;
}

.bnext {
  right: 5%;
}

.bback {
  left: 5%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
