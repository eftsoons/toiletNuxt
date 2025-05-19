<template>
  <main @click="setactive">
    <transition name="menu1">
      <div v-if="!next" @click="click" class="calculation">
        <div class="element">
          <div class="name">1. Удаленность от г.Красноярск км?</div>
          <input
            @change="(e) => change(e, 'remoteness')"
            placeholder="Введите"
          />
        </div>
        <div class="element">
          <div class="name">2. Возможность подъезда воровайки?</div>
          <Selector
            :data="['Да', 'Нет']"
            :activeselector="setdataactive1"
            :setactive="setdata1"
          />
        </div>
        <div class="element">
          <div class="name">3. Нужна ли копка ямы/установка септика?</div>
          <Selector
            :data="['Да', 'Нет']"
            :activeselector="setdataactive2"
            :setactive="setdata2"
          />
        </div>
        <div class="element">
          <div class="name">
            4. Нужно ли подготавливать местность? (Отсыпать яму, демонтаж
            старого туалета..)
          </div>
          <Selector
            :data="['Да', 'Нет']"
            :activeselector="setdataactive3"
            :setactive="setdata3"
          />
        </div>
        <div class="element">
          <div class="name">5. Нужно ли подключение к электричеству?</div>
          <Selector
            :data="['Да', 'Нет']"
            :activeselector="setdataactive4"
            :setactive="setdata4"
          />
        </div>
      </div>
    </transition>
    <transition name="menu2">
      <div class="main" v-if="next" @click="click">
        <h3>Оформление заказа</h3>
        <input
          class="inputtext"
          @change="(e) => change(e, 'full_name')"
          placeholder="ФИО"
        />
        <input
          class="inputtext"
          @change="(e) => change(e, 'region')"
          placeholder="Регион"
        />
        <input
          @change="(e) => change(e, 'location')"
          placeholder="Населенный пункт"
        />
        <input
          class="inputtext"
          @change="(e) => change(e, 'street')"
          placeholder="Улица"
        />
        <input
          class="inputtext"
          @change="(e) => change(e, 'number')"
          placeholder="Телефон"
        />
        <Button
          @click="send"
          :styles="{
            width: '227px',
            height: '41px',
            fontSize: '20px',
            borderRadius: '30px',
          }"
          >Сделать заказ</Button
        >
      </div>
    </transition>
  </main>
</template>

<script>
import Button from "./Button.vue";
import Selector from "./Selector.vue";
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
      } else if (type == "region") {
        this.region = e.target.value;
      } else if (type == "location") {
        this.location = e.target.value;
      } else if (type == "street") {
        this.street = e.target.value;
      } else if (type == "number") {
        this.number = e.target.value;
      } else if (type == "remoteness") {
        this.remoteness = e.target.value;

        this.checknext();
      }
    },
    send() {
      if (
        this.number &&
        this.full_name &&
        this.location &&
        this.region &&
        this.full_name
      ) {
        useFetch("https://toilet.widgetvoting.ru/regist_zakaz", {
          method: "POST",
          body: {
            full_name: this.full_name,
            region: this.region,
            location: this.location,
            street: this.street,
            number: this.number,
            setdataactive1: this.setdataactive1,
            setdataactive2: this.setdataactive2,
            setdataactive3: this.setdataactive3,
            setdataactive4: this.setdataactive4,
            remoteness: this.remoteness,
          },
        }).then(() => this.setactive());
      }
    },
    checknext() {
      if (
        this.remoteness &&
        this.setdataactive1 != 0 &&
        this.setdataactive2 != 0 &&
        this.setdataactive3 != 0 &&
        this.setdataactive4 != 0
      ) {
        this.next = true;
      } else {
        this.next = false;
      }
    },
    setdata1(count) {
      this.setdataactive1 = count;

      this.checknext();
    },
    setdata2(count) {
      this.setdataactive2 = count;

      this.checknext();
    },
    setdata3(count) {
      this.setdataactive3 = count;

      this.checknext();
    },
    setdata4(count) {
      this.setdataactive4 = count;

      this.checknext();
    },
  },
  components: { Button, Selector },
  data() {
    return {
      full_name: null,
      region: null,
      location: null,
      street: null,
      number: null,
      next: false,
      remoteness: null,
      setdataactive1: 0,
      setdataactive2: 0,
      setdataactive3: 0,
      setdataactive4: 0,
      setdataactive5: 0,
    };
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
  padding: 15px 15px;

  .calculation {
    background-color: rgba(233, 222, 211, 1);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px 0;
    position: absolute;
    gap: 10px;
    width: 90%;
    max-width: 594px;

    .element {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      width: 80%;
    }
  }

  .name {
    font-family: "VK Sans Display";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    text-transform: uppercase;
    color: #fbf6f1;
    padding: 10px 15px;
    background: #655d56;
    border-radius: 20px;
    width: 100%;
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

  .main {
    border-radius: 20px;
    height: 327px;
    width: 296px;
    background-color: rgba(101, 93, 86, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px 0;
  }
}

.menu1-enter-active,
.menu1-leave-active {
  transition: opacity 0.5s ease;
}

.menu2-enter-active,
.menu2-leave-active {
  transition: opacity 1s ease;
}

.menu1-enter-from,
.menu1-leave-to,
.menu2-enter-from,
.menu2-leave-to {
  opacity: 0;
}
</style>
