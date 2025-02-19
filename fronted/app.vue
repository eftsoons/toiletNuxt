<template>
  <Transition>
    <Registzakaz :setactive="Zakazactive" v-if="characteristicactive" />
  </Transition>
  <Transition>
    <Registcall :setactive="Zakazcallactive" v-if="callactive" />
  </Transition>
  <Header />
  <main>
    <Page1 />
    <Page2 />
    <h2>ПРЕИМУЩЕСТВА</h2>
    <Page3 />
    <Button @click="Zakazactive" :styles="{ width: '80%', height: '62px' }"
      >Оформить заказ онлайн</Button
    >
    <svg viewBox="0 0 430 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M-33 58L-1.99999 19C13.8542 -0.945653 44.1458 -0.945643 60 19V19C75.8542 38.9456 106.146 38.9456 122 19V19C137.854 -0.945643 168.146 -0.945643 184 19V19C199.854 38.9456 230.146 38.9456 246 19V19C261.854 -0.945643 292.146 -0.945643 308 19V19C323.854 38.9456 354.146 38.9456 370 19V19C385.854 -0.945643 416.146 -0.945639 432 19L463 58"
        stroke="#655D56"
        stroke-width="7"
        stroke-linecap="round"
      />
    </svg>
    <h2>ДОСТАВКА И УСТАНОВКА</h2>
    <Page4 />
    <a>СМ. ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</a>
    <Button @click="Zakazcallactive" :styles="{ width: '80%', height: '62px' }"
      >Расчитать стоимость</Button
    >
  </main>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";
import Page4 from "@/components/Page4.vue";
import Page5 from "@/components/Page5.vue";
import Registzakaz from "@/components/Registzakaz.vue";
import Registcall from "@/components/Registcall.vue";

export default {
  methods: {
    Zakazactive() {
      this.characteristicactive = !this.characteristicactive;
    },
    Zakazcallactive() {
      this.callactive = !this.callactive;
    },
  },
  components: {
    Header,
    Footer,
    Button,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Registzakaz,
    Registcall,
  },
  data() {
    return { characteristicactive: false, callactive: false };
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
