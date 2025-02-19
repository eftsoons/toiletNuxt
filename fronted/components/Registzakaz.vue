<template>
  <main @click="setactive">
    <div @click="click">
      <h3>Оформление заказа</h3>
      <input @change="(e) => change(e, 'full_name')" placeholder="ФИО" />
      <input @change="(e) => change(e, 'region')" placeholder="Регион" />
      <input
        @change="(e) => change(e, 'location')"
        placeholder="Населенный пункт"
      />
      <input @change="(e) => change(e, 'street')" placeholder="Улица" />
      <input
        @change="(e) => change(e, 'number')"
        type="number"
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
      } else if (type == "region") {
        this.region = e.target.value;
      } else if (type == "location") {
        this.location = e.target.value;
      } else if (type == "street") {
        this.street = e.target.value;
      } else if (type == "number") {
        this.number = e.target.value;
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
        useFetch("http://localhost:5012/regist_zakaz", {
          method: "POST",
          body: {
            full_name: this.full_name,
            region: this.region,
            location: this.location,
            street: this.street,
            number: this.number,
          },
        }).then(() => this.setactive());
      }
    },
  },
  components: { Button },
  data() {
    return {
      full_name: null,
      region: null,
      location: null,
      street: null,
      number: null,
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
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

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

  div {
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
</style>
