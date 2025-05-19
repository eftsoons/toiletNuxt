<template>
  <footer itemscope itemtype="https://schema.org/PostalAddress">
    <div class="page5">
      <div class="content">
        <h4>Часто задаваемые вопросы</h4>
        <div class="content2">
          <div class="infocontent">
            <SubText
              text="Стоимость доставки зависит от удаленности участка от г. Красноярск."
              >Сколько будет стоить доставка?</SubText
            >
            <SubText
              text="Установка расчитывается исходя из сложности ландшафта."
              >Сколько будет стоить установка?</SubText
            >
            <SubText
              text="Стоимость демонтажа старого туалета обговаривается индивидуально."
              >Возможен ли демонтаж старого туалета?</SubText
            >
            <SubText
              text="Да, мы можем установить туалет на старую яму, предварительно подготовив ее."
              >Можно ли установить туалет на старую яму?</SubText
            >
          </div>
        </div>
      </div>
      <svg viewBox="0 0 430 386" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M402.128 17.2184C412.55 4.39689 427.403 -1.11236 441.634 0.690636V349.413C425.375 347.642 408.515 354.071 396.625 368.699C378.352 391.181 346.451 391.181 328.178 368.699C306.966 342.602 269.935 342.602 248.723 368.699C230.451 391.181 198.549 391.181 180.277 368.699C159.065 342.602 122.034 342.602 100.822 368.699C82.5493 391.181 50.6482 391.181 32.3753 368.699C20.4854 354.071 3.62473 347.642 -12.634 349.413V0.690607C1.5965 -1.11237 16.4504 4.3969 26.8716 17.2184C48.0831 43.3154 85.1144 43.3154 106.326 17.2184C124.599 -5.2632 156.5 -5.2632 174.773 17.2184C195.984 43.3154 233.016 43.3154 254.227 17.2184C272.5 -5.2632 304.401 -5.2632 322.674 17.2184C343.886 43.3154 380.917 43.3154 402.128 17.2184Z"
          fill="#655D56"
        />
      </svg>
    </div>
    <div class="footer">
      <div
        itemscope
        itemtype="http://schema.org/Organization"
        class="infocontent"
      >
        <h6 class="h6">Связаться с нами</h6>
        <div class="content">
          <div class="info">
            <img src="/img/pin.webp" />
            <address>660062, г. Красноярск ул. Телевизорная улица 14</address>
          </div>
          <div class="info">
            <img src="/img/telephone.webp" />
            <div>
              <a href="tel:2727272" style="text-decoration-line: none"
                ><p itemprop="telephone">272-72-72</p></a
              >
              <a href="tel:+79676127272" style="text-decoration-line: none"
                ><p itemprop="telephone">+7 (967) 612-72-72</p></a
              >
            </div>
          </div>
          <div class="infoemail">
            <h5 style="color: #655d56">EMAIL:</h5>
            <div>
              <a
                href="mailto:tolchokvpered@yandex.ru"
                style="text-decoration-line: none"
                ><p itemprop="email">tolchokvpered@yandex.ru</p></a
              >
            </div>
          </div>
          <div class="social">
            <a itemprop="url" href="https://wa.me/79676127272"
              ><img src="/img/whatsapp.webp"
            /></a>
            <a itemprop="url" href="https://vk.com/id1029874116"
              ><img src="/img/vk.webp"
            /></a>
            <a itemprop="url" href="https://ok.ru"
              ><img src="/img/odnoklassniki.webp"
            /></a>
            <a itemprop="url" href="https://t.me/tolchok_vpered"
              ><img src="/img/tg.webp"
            /></a>
          </div>
          <Button
            @click="setactive"
            :styles="{
              width: '198.44px',
              height: '34.27px',
              fontSize: '14px',
              zIndex: 2,
            }"
            >Рассчитать стоимость</Button
          >
          <div class="infoinn">
            <span class="infoinnspan">ИНН 031804055917</span>
            <span class="infoinnspan">ОГРН 325246800036332</span>
          </div>
        </div>
      </div>
      <a
        href="https://yandex.ru/maps/62/krasnoyarsk/house/televizornaya_ulitsa_14/bUsYcQ5hSUwGQFtsfXxycXtgYA==/?ll=92.790512%2C56.031249&z=14.44"
      >
        <img class="map" src="/img/map.webp" />
      </a>
    </div>
    <div class="addressLocality">
      <span>MADE IN KRASNOYARSK</span>
    </div>
  </footer>
</template>

<script>
import Button from "./Button.vue";
import SubText from "./SubText.vue";

export default {
  components: { Button, SubText },
  props: {
    setactive: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.page5 {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  bottom: 70px;

  svg {
    position: absolute;
    height: 125%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 40px 9px;
    width: 100%;
    box-sizing: border-box;
    z-index: 1;
    height: 452px;
  }

  .content2 {
    display: flex;
    gap: 30px;
    align-items: center;

    p {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 11px;
      color: #fbf6f1;
      margin-left: 6px;
    }

    img {
      width: 140px;
      height: 171px;
      border-radius: 10px;
      object-fit: cover;
    }
  }

  .infocontent {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}

.footer {
  display: flex;
  align-items: center;
  gap: 20px;

  .infocontent {
    display: flex;
    flex-direction: column;
    margin-left: 27px;
    gap: 10px;
    width: 100%;
    flex-grow: 2;
  }
}

.infoinn {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: left;
}

.infoinnspan {
  font-family: Druk Cyr;
  color: rgba(90, 83, 78, 1);
  font-size: 12px;
}

footer {
  background-color: rgba(231, 223, 215, 1);
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 27px;
  margin-top: 130px;

  .addressLocality {
    display: flex;
    flex-direction: column;
    z-index: 1;

    span {
      font-family: Druk Cyr;
      color: rgba(90, 83, 78, 1);
      font-size: 24px;
      width: 100%;
      text-align: center;
    }
  }

  .map {
    width: 160px;
    height: 222px;
    border-radius: 10px 0px 0px 10px;
    object-fit: cover;
    object-position: center center;
    background-size: 50% 50%;
  }

  .info {
    display: flex;
    align-items: center;
    gap: 14px;

    img {
      width: 25px;
      height: 25px;
    }
  }

  .infoemail {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p,
  address {
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;

    color: #000000;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .social {
    display: flex;
    gap: 25px;

    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
