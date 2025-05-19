<template>
  <main @click="setactive">
    <div
      itemscope
      itemtype="http://schema.org/Product"
      itemprop="additionalType"
      class="scheme"
      @click="click"
    >
      <ZoomImg
        itemprop="image"
        src="/img/schema.webp"
        zoom-type="move"
        :zoom-scale="2"
        class="zoom"
      />
      <p>Размер изделия: 2334х2420х1245 (По основанию)</p>
      <p>Размер изделия: 2334х2420х1525 (По крыше)</p>
      <p>Толщина стен: 68мм</p>
      <p>Стены: Фанера</p>
      <p>Основание: Лиственница</p>
      <p>Утеплитель: Пенопласт</p>
      <p>Покрытие крыши: Ондулин</p>
    </div>
  </main>
</template>

<script>
import { ZoomImg } from "vue3-zoomer";

export default {
  props: {
    setactive: {
      type: Function,
    },
  },
  methods: {
    click(e) {
      e.stopPropagation();
    },
  },
  components: { ZoomImg },
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

.scheme {
  width: 70%;
  background-color: rgba(101, 93, 86, 1);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    color: rgba(251, 246, 241, 1);
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 19px;
    display: flex;
    align-items: center;
    letter-spacing: 0.06em;
    width: 99%;
    overflow-wrap: anywhere;
  }
}
</style>
