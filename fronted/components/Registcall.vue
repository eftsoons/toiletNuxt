<template>
  <main @click="setactive">
    <transition name="menu1">
      <div v-if="!thanks" class="callmain" @click="click">
        <h3>НАПИШИТЕ НАМ</h3>
        <div class="social">
          <a href="https://wa.me/79676127272"
            ><img src="/img/whatsapp.webp"
          /></a>
          <a href="https://vk.com/id1029874116"><img src="/img/vk.webp" /></a>
          <a href="https://t.me/tolchok_vpered"><img src="/img/tg.webp" /></a>
        </div>
        <h3>Обратная связь</h3>
        <input
          class="inputtext"
          @change="(e) => change(e, 'full_name')"
          placeholder="ФИО"
        />
        <input
          class="inputtext"
          @change="(e) => change(e, 'number')"
          placeholder="Телефон"
        />
        <div class="personaldata-div">
          <input type="checkbox" id="personaldata" v-model="personaldata" />
          <label for="personaldata"
            ><span>Согласен на обработку</span>
            <a href="/policy" target="_blank" rel="noopener noreferrer"
              >персональных данных</a
            ></label
          >
        </div>
        <Button
          @click="send"
          :styles="{
            width: '227px',
            height: '41px',
            fontSize: '20px',
            borderRadius: '30px',
          }"
          >Заказать звонок</Button
        >
      </div>
    </transition>
    <transition name="menu2">
      <div v-if="thanks" class="callthanks" @click="click">
        <span class="callthanksheader">ТОЛЧОК ВПЕРЕД</span>
        <div>
          <img src="/img/checkmark.png" />
          <span class="callthanksdescription">
            Мы уже получили вашу заявку. Наш оператор свяжется с вами в
            ближайшее время.
          </span>
        </div>
        <span class="callthanksfooter">MADE IN KRASNOYARSK</span>
      </div>
    </transition>
  </main>
</template>

<script>
import Button from "./Button.vue";
import { useFetch } from "#app";

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
    change(e, type) {
      if (type == "full_name") {
        this.full_name = e.target.value;
      } else if (type == "number") {
        this.number = e.target.value;
      }
    },
    send() {
      if (this.number && this.full_name && this.personaldata) {
        useFetch("https://toilet.widgetvoting.ru/regist_call", {
          method: "POST",
          body: {
            full_name: this.full_name,
            number: this.number,
          },
        }).then(() => {
          this.thanks = true;
          _tmr.push({ type: "reachGoal", id: 3625583, goal: "TEST_NAME" });
        });
      }
    },
  },
  components: { Button },
  data() {
    return {
      full_name: null,
      number: null,
      thanks: false,
      personaldata: false,
    };
  },
};
</script>

<style scoped>
.social {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
  }
}

.personaldata-div {
  font-family: VK Sans Display;
  color: #fbf6f1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    font-family: VK Sans Display;
    color: #fbf6f1;
  }

  input {
    appearance: none;
    position: relative;
    width: 30px;
    height: 30px;
    background: white;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 0.2);
    border-radius: 999px;
    transition: 500ms;
  }

  input:checked::after {
    content: "✓";
    height: 100%;
    width: 100%;
    color: rgba(101, 93, 86, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    transition: 0.5s;
    opacity: 1;
    overflow: hidden;
  }

  label {
    display: flex;
    flex-direction: column;
  }
}

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

  .callmain {
    border-radius: 20px;
    width: 296px;
    gap: 20px;
    background-color: rgba(101, 93, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
    position: absolute;
  }

  .callthanks {
    border-radius: 20px;
    width: 80%;
    height: 60%;
    gap: 10px;
    background-color: rgba(232, 223, 215, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    position: absolute;

    img {
      width: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    .callthanksheader {
      font-family: "Druk Cyr";
      font-style: normal;
      font-weight: 500;
      font-size: 30px;
      line-height: 38px;
      text-transform: uppercase;

      color: #655d56;
    }

    .callthanksdescription {
      font-family: "VK Sans Display";
      font-style: normal;
      font-weight: 500;
      font-size: 17px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.01em;
      color: #655d56;
      padding: 0 1rem;
    }

    .callthanksfooter {
      font-family: Druk Cyr;
      color: #655d56;
      font-size: 24px;
    }
  }

  h3 {
    font-family: "Druk Cyr";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 41px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #fbf6f1;
  }
}

.menu1-enter-active,
.menu1-leave-active {
  transition: opacity 0.5s ease;
}

.menu2-enter-active,
.menu2-leave-active {
  transition: opacity 0.5s ease;
}

.menu1-enter-from,
.menu1-leave-to,
.menu2-enter-from,
.menu2-leave-to {
  opacity: 0;
}
</style>
