<template>
  <Transition>
    <Registzakaz :setactive="Zakazactive" v-if="characteristicactive" />
  </Transition>
  <Transition>
    <Registcall :setactive="Zakazcallactive" v-if="callactive" />
  </Transition>
  <Transition>
    <Scheme :setactive="Schemeactive" v-if="schemeactive" />
  </Transition>
  <Transition>
    <Gallery
      :setdata="setdata"
      :data="datagallery"
      v-if="datagallery.length > 0"
    />
  </Transition>
  <Header :setactive="Zakazcallactive" />
  <main>
    <Page1 />
    <video class="video" autoplay muted loop playsinline>
      <source src="/video/tyalet.mp4" type="video/mp4" />
    </video>
    <!-- <img class="video" src="/gif/tyalet16.gif" /> -->
    <Page2 :setactive="Zakazcallactive" />
    <h2>ПРЕИМУЩЕСТВА</h2>
    <Page3 :setdata="setdata" />
    <Button @click="Zakazcallactive" :styles="{ width: '80%', height: '62px' }"
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
    <a style="cursor: pointer" @click="Schemeactive"
      >СМ. ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ</a
    >
    <Button @click="Zakazcallactive" :styles="{ width: '80%', height: '62px' }"
      >Узнать подробнее</Button
    >
    <div class="call">
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="Zakazcallactive"
      >
        <g clip-path="url(#clip0_243_167)">
          <rect width="50" height="50" rx="10" fill="rgba(105, 190, 151, 1)" />
          <path
            d="M38.4665 28.8033C37.4579 28.1239 36.4095 27.4967 35.3081 26.961C33.7421 26.1902 32.2027 26.36 30.7695 27.3661C29.9998 27.9018 29.5221 28.6465 29.177 29.5611C25.6603 27.6666 23.0858 24.9097 21.0156 21.6041C21.1483 21.5388 21.2014 21.4996 21.2545 21.4734C23.9484 20.4282 24.957 17.5929 23.484 15.1235C22.9664 14.2742 22.4488 13.4119 21.918 12.5757C20.5379 10.3545 17.9103 9.76659 15.6808 11.1516C11.3148 13.8692 9.82848 19.396 12.2305 23.9951C13.9689 27.3138 16.2913 30.2013 18.9985 32.8145C21.5332 35.2577 24.32 37.3613 27.6775 38.6156C29.2965 39.2166 30.9686 39.5825 32.6805 39.3342C35.3877 38.9292 37.6172 37.5965 39.3025 35.4799C41.2533 33.0496 40.9083 30.4496 38.4665 28.8033ZM37.7366 33.5723C36.237 35.8065 34.0872 36.8909 31.5127 37.0085C30.1193 36.9824 28.9116 36.695 27.7836 36.0939C21.9711 33.0235 17.5122 28.6465 14.4201 22.9107C12.5755 19.4875 13.6637 15.2803 16.9415 13.1767C18.1093 12.432 19.2108 12.6672 19.9407 13.8431C20.4582 14.6793 20.9625 15.5155 21.4668 16.3517C22.1702 17.5276 21.719 18.7558 20.4184 19.2392C18.7065 19.8925 18.1492 21.4865 19.1179 23.0413C21.2943 26.5299 24.1608 29.3521 27.7173 31.4948C29.2567 32.4225 30.9022 31.8737 31.5392 30.2144C32.0302 28.9209 33.2909 28.4767 34.5118 29.1822C35.3877 29.6918 36.2503 30.2013 37.0996 30.7239C38.1878 31.3903 38.4532 32.5009 37.7366 33.5723Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_243_167">
            <rect width="50" height="50" rx="10" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </main>
  <Footer :setactive="Zakazcallactive" />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/Button.vue";
import Page1 from "@/components/Page1.vue";
import Page2 from "@/components/Page2.vue";
import Page3 from "@/components/Page3.vue";
import Page4 from "@/components/Page4.vue";
import Registzakaz from "@/components/Registzakaz.vue";
import Registcall from "@/components/Registcall.vue";
import Scheme from "@/components/Scheme.vue";
import Gallery from "@/components/Gallery.vue";

export default {
  // mounted() {
  //   (function (d, w, id) {
  //     if (d.getElementById(id)) return;
  //     var ts = d.createElement("script");
  //     ts.type = "text/javascript";
  //     ts.async = true;
  //     ts.id = id;
  //     ts.src = "https://top-fwz1.mail.ru/js/code.js";
  //     var f = function () {
  //       var s = d.getElementsByTagName("script")[0];
  //       s.parentNode.insertBefore(ts, s);
  //     };
  //     if (w.opera == "[object Opera]") {
  //       d.addEventListener("DOMContentLoaded", f, false);
  //     } else {
  //       f();
  //     }
  //   })(document, window, "tmr-code");

  //   var _tmr = window._tmr || (window._tmr = []);
  //   _tmr.push({ id: "3625583", type: "pageView", start: new Date().getTime() });
  // },
  methods: {
    Zakazactive() {
      this.characteristicactive = !this.characteristicactive;
    },
    Zakazcallactive() {
      this.callactive = !this.callactive;
    },
    Schemeactive() {
      this.schemeactive = !this.schemeactive;
    },
    setdata(array) {
      this.datagallery = array;
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
    Registzakaz,
    Registcall,
    Scheme,
    Gallery,
  },
  data() {
    return {
      characteristicactive: false,
      callactive: false,
      schemeactive: false,
      datagallery: [],
    };
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

.video {
  border-radius: 10px;
  width: 90%;
}

.call {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 2;

  svg {
    cursor: pointer;
  }
}
</style>
