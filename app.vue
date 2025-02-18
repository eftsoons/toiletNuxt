<template>
  <Header />
  <main>
    <Page1 />
    <div class="page2">
      <h1>МЫ ДЕЛАЕМ ТЕПЛЫЕ УЛИЧНЫЕ ТУАЛЕТЫ</h1>
      <div class="photo">
        <img src="/public/img/tyalet2.png" />
        <img src="/public/img/tyalet3.png" />
        <img src="/public/img/tyalet4.png" />
      </div>
      <div class="description">
        <span>Теплый корпус до -40°</span>
        <span>Экономичный смыв 0,5 - 1л</span>
        <span>Установка за 1 день под ключ</span>
      </div>
      <span class="description2">
        Новейшая модель уличного туалета, создана для максимального комфорта и
        гигиены в любое время года
      </span>
      <Button
        :styles="{
          width: '215px',
          marginBottom: '40px',
        }"
        @click="active = !active"
        >Узнать больше</Button
      >
    </div>
    <h2>ПРЕИМУЩЕСТВА</h2>
    <div class="page3">asd</div>
  </main>

  <Footer style="background-color: red" v-if="active" />
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";

export default {
  mounted() {},
  components: { Header, Footer, Button, Page1, Page2, Page3 },
  data() {
    return { active: false };
  },
};
</script>

<style>
.page2 {
  background-color: rgba(231, 223, 215, 1);
  height: 547px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 40px;
    font-weight: 500;
    font-family: Druk Cyr;
    color: rgba(142, 128, 114, 1);
  }

  .photo {
    display: flex;
    height: 220px;

    img:nth-child(1) {
      transform: rotate(-20deg) translateX(15px) translateY(20px);
    }

    img:nth-child(2) {
      z-index: 1;
    }

    img:nth-child(3) {
      transform: rotate(20deg) translateX(-15px) translateY(20px);
    }

    img {
      width: 121px;
      height: 190px;
      border-radius: 10px;
    }
  }

  .description {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-family: VK Sans Display;
      font-size: 13px;
      color: rgba(0, 0, 0, 1);
      font-weight: 500;
    }
  }

  .description2 {
    text-align: center;
    font-family: VK Sans Display;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    padding: 0 2rem;
  }
}

.page3 {
}
</style>
